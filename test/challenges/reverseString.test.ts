import { describe, test, expect } from "@jest/globals";
import reverseString from "../../challenges/reverseString";

describe("reverseString", () => {
  test("should reverse string", () => {
    const reversedString = reverseString("desserts");
    expect(reversedString).toBe("stressed");
  });

  test("should return same if reverse a single character", () => {
    const reversedString = reverseString("a");
    expect(reversedString).toBe("a");
  });

  test("should return same if reverse empty string", () => {
    const reversedString = reverseString("");
    expect(reversedString).toBe("");
  });
});
