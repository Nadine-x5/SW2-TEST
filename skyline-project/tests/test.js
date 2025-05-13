const { validateUsername, validatePassword } = require('../script');

describe("Username Validation", () => {
  test("Valid username", () => {
    expect(validateUsername("user123")).toBe(true);
  });

  test("Invalid username (no number)", () => {
    expect(validateUsername("username")).toBe(false);
  });

  test("Invalid username (too short)", () => {
    expect(validateUsername("us1")).toBe(false);
  });
});

describe("Password Validation", () => {
  test("Valid password", () => {
    expect(validatePassword("pass@12word")).toBe(true);
  });

  test("Invalid password (short)", () => {
    expect(validatePassword("pw!1")).toBe(false);
  });

  test("Invalid password (no special char)", () => {
    expect(validatePassword("pass12345")).toBe(false);
  });

  test("Invalid password (less than 2 numbers)", () => {
    expect(validatePassword("pass@one")).toBe(false);
  });
});
