import { describe, it, expect } from 'vitest';

// Extracted from Contacto.jsx handleSubmit validation logic
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm({ fullName, email }) {
  if (fullName.trim().length < 3) return 'name_error';
  if (!emailRegex.test(email)) return 'email_error';
  return null;
}

describe('Contact form validation', () => {
  describe('name validation', () => {
    it('rejects an empty name', () => {
      expect(validateForm({ fullName: '', email: 'a@b.com' })).toBe('name_error');
    });

    it('rejects a name shorter than 3 characters', () => {
      expect(validateForm({ fullName: 'Ab', email: 'a@b.com' })).toBe('name_error');
    });

    it('rejects a whitespace-only name', () => {
      expect(validateForm({ fullName: '   ', email: 'a@b.com' })).toBe('name_error');
    });

    it('accepts a name with exactly 3 characters', () => {
      expect(validateForm({ fullName: 'Ana', email: 'a@b.com' })).toBeNull();
    });

    it('accepts a normal full name', () => {
      expect(validateForm({ fullName: 'Juan Pérez', email: 'a@b.com' })).toBeNull();
    });
  });

  describe('email validation', () => {
    it('rejects an empty email', () => {
      expect(validateForm({ fullName: 'Juan', email: '' })).toBe('email_error');
    });

    it('rejects an email without @', () => {
      expect(validateForm({ fullName: 'Juan', email: 'juanexample.com' })).toBe('email_error');
    });

    it('rejects an email without domain', () => {
      expect(validateForm({ fullName: 'Juan', email: 'juan@' })).toBe('email_error');
    });

    it('rejects an email without TLD', () => {
      expect(validateForm({ fullName: 'Juan', email: 'juan@example' })).toBe('email_error');
    });

    it('accepts a standard email', () => {
      expect(validateForm({ fullName: 'Juan', email: 'juan@example.com' })).toBeNull();
    });

    it('accepts an email with subdomains', () => {
      expect(validateForm({ fullName: 'Juan', email: 'juan@mail.example.org' })).toBeNull();
    });
  });
});
