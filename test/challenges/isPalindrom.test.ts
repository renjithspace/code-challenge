import { describe, test, expect } from "@jest/globals";
import isPalindrom from "../../challenges/isPalindrom";

describe("isPalindrom", () => {
  test("returns true for palindromes", () => {
    expect(isPalindrom("racecar")).toBe(true);
    expect(isPalindrom("level")).toBe(true);
    expect(isPalindrom("deified")).toBe(true);
  });

  test("returns false for non-palindromes", () => {
    expect(isPalindrom("hello")).toBe(false);
    expect(isPalindrom("world")).toBe(false);
    expect(isPalindrom("banana")).toBe(false);
  });

  test("returns true for single-character strings", () => {
    expect(isPalindrom("a")).toBe(true);
    expect(isPalindrom("p")).toBe(true);
  });

  test("returns true for empty strings", () => {
    expect(isPalindrom("")).toBe(true);
  });
});
