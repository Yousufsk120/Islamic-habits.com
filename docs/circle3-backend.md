# Circle3 backend

Circle3 uses Vercel Functions for its API and Supabase for Postgres, authentication, and future realtime rooms. Cloudflare remains the public DNS, CDN, and security layer.

## Activate the application backend

1. Add Supabase from the Vercel Marketplace and connect it to the Islamic Habits project.
2. Run `supabase/migrations/001_circle3.sql` in the Supabase SQL editor.
3. Add the variables listed in `.env.example` to Vercel for Production, Preview, and Development as appropriate.
4. Set `CIRCLE3_HASH_SALT` to a long random secret. Never expose the service-role key or salt in browser code.
5. Verify the sending domain in Resend and add `RESEND_API_KEY`. Email is optional for database writes but recommended before launch.
6. Redeploy and check `/api/circle3/health`.

## Current API

- `POST /api/circle3/applications` validates and stores a pilot application, applies basic rate limiting, generates a reference, and sends optional emails.
- `GET /api/circle3/status?reference=...&email=...` returns a limited application status after matching the reference and hashed email.
- `GET /api/circle3/health` reports whether storage and email are configured without exposing secrets.

## Security boundaries

- The browser never receives the Supabase service-role key.
- Public database access is revoked and row-level security is enabled.
- IP addresses and lookup emails are stored as salted hashes for abuse checks.
- Identity documents and selfies are intentionally excluded from this phase.
- Realtime rooms should not open until managed sign-in, moderation operations, retention rules, and an incident-response process are in place.
