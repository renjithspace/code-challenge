import { describe, test, expect } from "@jest/globals";
import isPrimeNumber from "../challenges/isPrimeNumber";

describe("isPrimeNumber", () => {
  test("returns false for non-prime numbers", () => {
    expect(isPrimeNumber(0)).toBe(false);
    expect(isPrimeNumber(1)).toBe(false);
    expect(isPrimeNumber(4)).toBe(false);
    expect(isPrimeNumber(10)).toBe(false);
    expect(isPrimeNumber(15)).toBe(false);
    expect(isPrimeNumber(27)).toBe(false);
    expect(isPrimeNumber(100)).toBe(false);
  });

  test("returns true for prime numbers", () => {
    expect(isPrimeNumber(2)).toBe(true);
    expect(isPrimeNumber(3)).toBe(true);
    expect(isPrimeNumber(5)).toBe(true);
    expect(isPrimeNumber(7)).toBe(true);
    expect(isPrimeNumber(11)).toBe(true);
    expect(isPrimeNumber(13)).toBe(true);
    expect(isPrimeNumber(17)).toBe(true);
  });
});
