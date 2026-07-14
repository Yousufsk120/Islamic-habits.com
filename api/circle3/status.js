import { getSupabaseAdmin } from "../_lib/supabase.js";
import { json, methodNotAllowed } from "../_lib/http.js";
import { sha256 } from "../_lib/validation.js";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const reference = String(url.searchParams.get("reference") || "").trim().toUpperCase();
    const email = String(url.searchParams.get("email") || "").trim().toLowerCase();
    if (!/^C3-\d{8}-[A-F0-9]{8}$/.test(reference) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: "Reference and email are required." }, 422);
    const salt = process.env.CIRCLE3_HASH_SALT;
    if (!salt) throw new Error("Circle3 request hashing is not configured.");
    const emailHash = await sha256(`${salt}:${email}`);
    const { data, error } = await getSupabaseAdmin()
      .from("circle3_applications")
      .select("reference,status,role,purpose,created_at,updated_at")
      .eq("reference", reference)
      .eq("email_hash", emailHash)
      .maybeSingle();
    if (error) throw error;
    if (!data) return json({ ok: false, error: "No matching application was found." }, 404);
    return json({ ok: true, application: data });
  } catch (error) {
    console.error("circle3_status_failed", { message: error.message });
    return json({ ok: false, error: "Application status is temporarily unavailable." }, 503);
  }
}

export function POST() {
  return methodNotAllowed(["GET"]);
}
