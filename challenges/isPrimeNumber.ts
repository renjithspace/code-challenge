/**
 * Check whether the provided number is a prime number or not
 *
 * @param number The number
 * @returns The number is prime number or not
 *
 * Time complexity O(sqrt(n))
 * Space complexity O(1)
 */
export default function isPrimeNumber(number: number) {
  // If number is less than or equal to 1, that's a composite number
  if (number <= 1) {
    return false;
  }

  // Divide the number with 2 to square root of the numbers
  for (let divisor = 2; divisor <= Math.sqrt(number); divisor++) {
    // If there's no reminder (exact division), then it's not a prime number
    if (number % divisor === 0) {
      return false;
    }
  }

  // Otherwise it's a prime number
  return true;
}
