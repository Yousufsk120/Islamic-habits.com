const allowedRoles = new Set(["speaker", "observer"]);
const allowedPurposes = new Set([
  "Islamic habit support", "Family discussion", "Marriage discussion",
  "Study and productivity", "Emotional support", "Youth support",
]);
const allowedAges = new Set(["Under 18 — guardian-assisted", "18–24", "25–34", "35–49", "50+"]);

function text(value, max) {
  return String(value || "").trim().replace(/[<>]/g, "").slice(0, max);
}

export function validateApplication(input) {
  const value = {
    name: text(input.name, 100),
    email: text(input.email, 254).toLowerCase(),
    country: text(input.country, 100),
    age: text(input.age, 40),
    role: text(input.role, 20),
    purpose: text(input.purpose, 80),
    language: text(input.language, 80),
    timezone: text(input.timezone, 100),
    note: text(input.note, 800),
    consent: input.consent === true || input.consent === "on" || input.consent === "true",
    website: text(input.website, 200),
  };
  const errors = [];
  if (value.name.length < 2) errors.push("Please provide your full name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) errors.push("Please provide a valid email address.");
  if (!value.country) errors.push("Please provide your country.");
  if (!allowedAges.has(value.age)) errors.push("Please choose a valid age group.");
  if (!allowedRoles.has(value.role)) errors.push("Please choose a valid Circle3 role.");
  if (!allowedPurposes.has(value.purpose)) errors.push("Please choose a valid Circle3 intention.");
  if (!value.language) errors.push("Please provide a preferred language.");
  if (!value.timezone) errors.push("Please provide a timezone or city.");
  if (value.note.length < 10) errors.push("Please share a little more about what would make the circle helpful and safe.");
  if (!value.consent) errors.push("Please accept the Circle3 participation and safety rules.");
  return { value, errors };
}

export async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function createReference() {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const random = crypto.randomUUID().replaceAll("-", "").slice(0, 8).toUpperCase();
  return `C3-${date}-${random}`;
}
