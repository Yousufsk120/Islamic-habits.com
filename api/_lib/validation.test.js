import test from "node:test";
import assert from "node:assert/strict";
import { createReference, validateApplication } from "./validation.js";

const valid = {
  name: "Amina Rahman",
  email: "amina@example.com",
  country: "India",
  age: "25–34",
  role: "speaker",
  purpose: "Islamic habit support",
  language: "Bengali",
  timezone: "Kolkata / UTC+5:30",
  note: "A respectful circle with clear boundaries would help me stay consistent.",
  consent: "on",
};

test("accepts a complete Circle3 application", () => {
  const result = validateApplication(valid);
  assert.deepEqual(result.errors, []);
  assert.equal(result.value.email, "amina@example.com");
  assert.equal(result.value.consent, true);
});

test("rejects invalid roles and missing consent", () => {
  const result = validateApplication({ ...valid, role: "admin", consent: false });
  assert.equal(result.errors.length, 2);
});

test("sanitizes unsafe angle brackets and limits notes", () => {
  const result = validateApplication({ ...valid, name: "<b>Amina</b>", note: "x".repeat(1000) });
  assert.equal(result.value.name, "bAmina/b");
  assert.equal(result.value.note.length, 800);
});

test("creates non-identifying references", () => {
  assert.match(createReference(), /^C3-\d{8}-[A-F0-9]{8}$/);
});
