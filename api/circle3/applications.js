import { getSupabaseAdmin } from "../_lib/supabase.js";
import { getClientIp, isAllowedOrigin, json, methodNotAllowed } from "../_lib/http.js";
import { createReference, sha256, validateApplication } from "../_lib/validation.js";
import { sendApplicationEmails } from "../_lib/email.js";

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: { Allow: "POST, OPTIONS" } });
}

export async function POST(request) {
  if (!isAllowedOrigin(request)) return json({ ok: false, error: "Origin not allowed." }, 403);
  try {
    const input = await request.json();
    const { value, errors } = validateApplication(input);
    if (value.website) return json({ ok: true, reference: "C3-RECEIVED" }, 202);
    if (errors.length) return json({ ok: false, error: errors[0], errors }, 422);

    const supabase = getSupabaseAdmin();
    const salt = process.env.CIRCLE3_HASH_SALT;
    if (!salt) throw new Error("Circle3 request hashing is not configured.");
    const ipHash = await sha256(`${salt}:${getClientIp(request)}`);
    const emailHash = await sha256(`${salt}:${value.email}`);
    const cutoff = new Date(Date.now() - 15 * 60 * 1000).toISOString();
    const { count, error: countError } = await supabase
      .from("circle3_applications")
      .select("id", { count: "exact", head: true })
      .or(`ip_hash.eq.${ipHash},email_hash.eq.${emailHash}`)
      .gte("created_at", cutoff);
    if (countError) throw countError;
    if ((count || 0) >= 3) return json({ ok: false, error: "Please wait before sending another application." }, 429);

    const reference = createReference();
    const record = {
      reference,
      name: value.name,
      email: value.email,
      email_hash: emailHash,
      country: value.country,
      age_group: value.age,
      role: value.role,
      purpose: value.purpose,
      language: value.language,
      timezone: value.timezone,
      safety_note: value.note,
      consent_at: new Date().toISOString(),
      ip_hash: ipHash,
      status: "submitted",
    };
    const { data, error } = await supabase.from("circle3_applications").insert(record).select("reference,status,created_at").single();
    if (error) throw error;
    try {
      await sendApplicationEmails(record);
    } catch (emailError) {
      console.error("circle3_application_email_failed", { reference, message: emailError.message });
    }
    console.info("circle3_application_created", { reference, purpose: value.purpose, role: value.role });
    return json({ ok: true, application: data }, 201);
  } catch (error) {
    console.error("circle3_application_failed", { message: error.message });
    const unavailable = error.message.includes("not configured");
    return json({ ok: false, error: unavailable ? "Circle3 applications are temporarily unavailable." : "We could not save the application. Please try again." }, unavailable ? 503 : 500);
  }
}

export function GET() {
  return methodNotAllowed(["POST", "OPTIONS"]);
}
