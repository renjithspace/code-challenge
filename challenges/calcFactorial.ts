/**
 * Calculates the factorial of a number.
 *
 * @param {number} number The number to calculate the factorial of.
 * @returns {number} The factorial of the number.
 * @throws {Error} If the number is negative or not an integer.
 *
 * @timeComplexity O(n)
 * The time complexity the function is O(n) because the number of iterations in
 * the for loop is proportional to the input number n.
 *
 * @spaceComplexity O(1)
 * The space complexity of the function is O(1) because the only variables that
 * are used in the function are constant in size.
 *
 */
export default function calcFactorial(number: number): number {
  // Check if the number is negative.
  if (number < 0) {
    throw new Error("Factorial is defined only for non-negative numbers");
  }

  // Check if the number is not an integer.
  if (!Number.isInteger(number)) {
    throw new Error("Factorial is defined only for integers");
  }

  // If the number is 0, return 1.
  if (number === 0) {
    return 1;
  }

  // Initialize the factorial to 1.
  let factorial = 1;

  // Iterate from 1 to the number, multiplying the factorial by each value.
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  // Return the factorial.
  return factorial;
}
