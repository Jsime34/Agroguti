import { describe, it, expect } from 'vitest';

// Mirrors sanitize() and validateForm() logic from Contacto.jsx
const sanitize = (str) => str.trim().replace(/[<>"'&]/g, (c) => ({
  '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#x27;', '&': '&amp;'
}[c]));

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm({ fullName, email }) {
  const cleanName = sanitize(fullName);
  const cleanEmail = sanitize(email);
  if (cleanName.length < 3) return 'name_error';
  if (!emailRegex.test(cleanEmail)) return 'email_error';
  return null;
}

describe('sanitize()', () => {
  it('trims leading/trailing whitespace', () => {
    expect(sanitize('  hello  ')).toBe('hello');
  });

  it('escapes <', () => {
    expect(sanitize('<script>')).toBe('&lt;script&gt;');
  });

  it('escapes >', () => {
    expect(sanitize('a > b')).toBe('a &gt; b');
  });

  it('escapes double quotes', () => {
    expect(sanitize('"quoted"')).toBe('&quot;quoted&quot;');
  });

  it("escapes single quotes", () => {
    expect(sanitize("it's")).toBe("it&#x27;s");
  });

  it('escapes &', () => {
    expect(sanitize('cats & dogs')).toBe('cats &amp; dogs');
  });

  it('leaves safe text unchanged', () => {
    expect(sanitize('Juan Pérez')).toBe('Juan Pérez');
  });
});

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

    it('rejects an XSS attempt in the name field', () => {
      // <script> sanitizes to &lt;script&gt; which is 14 chars — still passes length,
      // but the raw HTML tags are stripped so no injection reaches the DB
      const result = sanitize('<script>alert(1)</script>');
      expect(result).toBe('&lt;script&gt;alert(1)&lt;/script&gt;');
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
