import { describe, test, expect } from "@jest/globals";
import recursiveCalcFactorial from "../challenges/recursiveCalcFactorial";

describe("recursiveCalcFactorial", () => {
  test("should throw an error for negative numbers", () => {
    expect(() => recursiveCalcFactorial(-1)).toThrow(
      "Factorial is defined only for non-negative numbers"
    );
  });

  test("should throw an error for non-integer numbers", () => {
    expect(() => recursiveCalcFactorial(5.5)).toThrow(
      "Factorial is defined only for integers"
    );
  });

  test("should calculate the factorial of a non-negative integer", () => {
    expect(recursiveCalcFactorial(0)).toBe(1);
    expect(recursiveCalcFactorial(1)).toBe(1);
    expect(recursiveCalcFactorial(5)).toBe(120);
    expect(recursiveCalcFactorial(10)).toBe(3628800);
  });
});
