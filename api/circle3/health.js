import { json } from "../_lib/http.js";

export function GET() {
  return json({
    ok: true,
    service: "circle3",
    storageConfigured: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY),
    emailConfigured: Boolean(process.env.RESEND_API_KEY),
    time: new Date().toISOString(),
  });
}
