/**
 * Calculates the factorial of a number using recursive approach.
 *
 * @param number The non-negative integer for which factorial is to be calculated.
 * @returns The factorial of the input number.
 * @throws {Error} If the input is a negative number or a non-integer.
 * @timecomplexity O(n)
 * @spacecomplexity O(n), ecause of function call stack
 */
export default function recursiveCalcFactorial(number: number): number {
  // Ensure the number is non-negative
  if (number < 0) {
    throw new Error("Factorial is defined only for non-negative numbers");
  }

  // Ensure the number is an integer
  if (!Number.isInteger(number)) {
    throw new Error("Factorial is defined only for integers");
  }

  // Base case: factorial of 0 is 1
  if (number === 0) return 1;

  // Base case: factorial of 1 is 1
  if (number === 1) return 1;

  /**
   * Recursive case: calculate factorial by multiplying
   * the number with factorial of (number - 1)
   */
  return number * recursiveCalcFactorial(number - 1);
}
