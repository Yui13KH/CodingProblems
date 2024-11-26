const isPrime = require("./isPrimeNumber");

describe("isPrime", () => {
  test("works for small prime number", () => {
    expect(isPrime(3)).toBe(true);
  });
  test("works for small non prime number", () => {
    expect(isPrime(4)).toBe(false);
  });
  test("works with 1", () => {
    expect(isPrime(1)).toBe(false);
  });
  test("and 0 ", () => {
    expect(isPrime(0)).toBe(false);
  });
  test("work with negatives", () => {
    expect(isPrime(-1)).toBe(false);
  });
  test("works with big non prime number", () => {
    expect(isPrime(20)).toBe(false);
  });
  test("works with big prime number", () => {
    expect(isPrime(17)).toBe(true);
  });
  test("works with huge nont prime number", () => {
    expect(isPrime(999999)).toBe(false);
  });
  test("works with huge prime number", () => {
    expect(isPrime(997)).toBe(true);
  });
  test("fast , works with huge prime number", () => {
    expect(isPrime(14983)).toBe(true);
  });
  test("works with decimal", () => {
    expect(isPrime(2.5)).toBe(false);
  });
  test("works with string", () => {
    expect(isPrime("hi")).toBe(false);
  });
  test("works with object", () => {
    expect(isPrime({})).toBe(false);
  });
  test("works with array", () => {
    expect(isPrime([])).toBe(false);
  });
});
