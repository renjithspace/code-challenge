import { describe, test, expect } from "@jest/globals";
import reverseArray from "../challenges/reverseArray";

describe("reverseArray", () => {
  test("should return same array if reverse single element array", () => {
    const reversedArray = reverseArray([1]);
    expect(reversedArray).toEqual([1]);
  });

  test("should reverse multi-element array", () => {
    const reversedArray = reverseArray([1, 2, 3, 4]);
    expect(reversedArray).toEqual([4, 3, 2, 1]);
  });
});
