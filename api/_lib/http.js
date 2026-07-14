const securityHeaders = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json; charset=utf-8",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
};

export function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...securityHeaders, ...extraHeaders },
  });
}

export function methodNotAllowed(allowed) {
  return json({ ok: false, error: "Method not allowed." }, 405, { Allow: allowed.join(", ") });
}

export function getClientIp(request) {
  return request.headers.get("cf-connecting-ip")
    || request.headers.get("x-real-ip")
    || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || "unknown";
}

export function isAllowedOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const configured = process.env.SITE_URL || "https://islamic-habits.com";
  const allowed = new Set([configured, "https://www.islamic-habits.com", "http://localhost:4173", "http://localhost:3000"]);
  return allowed.has(origin);
}
