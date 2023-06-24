import { describe, test, expect } from "@jest/globals";
import isOddOrEven from "../../challenges/isOddOrEven";

describe("isOddOrEven", () => {
  test("should throw an error for non-integer numbers", () => {
    expect(() => isOddOrEven(1.5)).toThrow("The number shoule be an integer");
    expect(() => isOddOrEven(-1.7)).toThrow("The number shoule be an integer");
    expect(() => isOddOrEven(806.5)).toThrow("The number shoule be an integer");
  });

  test('should return "odd" for odd numbers', () => {
    expect(isOddOrEven(1)).toBe("odd");
    expect(isOddOrEven(749)).toBe("odd");
    expect(isOddOrEven(94345)).toBe("odd");
  });

  test('should return "even" for even numbers', () => {
    expect(isOddOrEven(2)).toBe("even");
    expect(isOddOrEven(344)).toBe("even");
    expect(isOddOrEven(64676)).toBe("even");
  });
});
