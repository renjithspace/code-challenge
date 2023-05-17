import { describe, test, expect } from "@jest/globals";
import calcFactorial from "../challenges/calcFactorial";

describe("recursiveCalcFactorial", () => {
  test("should throw an error for negative numbers", () => {
    expect(() => calcFactorial(-1)).toThrow(
      "Factorial is defined only for non-negative numbers"
    );
  });

  test("should throw an error for non-integer numbers", () => {
    expect(() => calcFactorial(5.5)).toThrow(
      "Factorial is defined only for integers"
    );
  });

  test("should calculate the factorial of a non-negative integer", () => {
    expect(calcFactorial(0)).toBe(1);
    expect(calcFactorial(1)).toBe(1);
    expect(calcFactorial(5)).toBe(120);
    expect(calcFactorial(10)).toBe(3628800);
  });
});
