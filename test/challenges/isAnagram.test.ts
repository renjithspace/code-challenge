import { describe, test, expect } from "@jest/globals";
import { isAnagram } from "../../challenges/isAnagram";

describe("isAnagram", () => {
  test("should return true for valid anagrams", () => {
    const firstWord = "listen";
    const secondWord = "silent";
    expect(isAnagram(firstWord, secondWord)).toBe(true);
  });

  test("should return false for non-anagrams", () => {
    const firstWord = "hello";
    const secondWord = "world";
    expect(isAnagram(firstWord, secondWord)).toBe(false);
  });

  test("should be case-insensitive", () => {
    const firstWord = "Listen";
    const secondWord = "silent";
    expect(isAnagram(firstWord, secondWord)).toBe(true);
  });

  test("should ignore whitespace", () => {
    const firstWord = "debit card";
    const secondWord = "bad credit";
    expect(isAnagram(firstWord, secondWord)).toBe(true);
  });
});
