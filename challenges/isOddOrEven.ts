/**
 * Checks if a number is odd or even.
 *
 * @param {number} number The number to check.
 * @returns {string} The number is "odd" or "even".
 * @throws {Error} If the number is a non-integer.
 *
 * @timeComplexity O(1)
 * @spaceComplexity O(1)
 */
export default function isOddOrEven(number: number): string {
  // If the number is not an integer, throw an error.
  if (!Number.isInteger(number)) {
    throw new Error("The number shoule be an integer");
  }

  // Return whether the number is "odd" or "even".
  return number % 2 === 0 ? "even" : "odd";
}
