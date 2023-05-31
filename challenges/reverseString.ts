/**
 * Reverses the order of the characters in a string.
 *
 * @param {string} string The string to reverse.
 * @returns {string} The reversed string.
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
export default function reverseString(string: string): string {
  // An empty string to store the reversed string.
  let reversedString = "";

  // Iterate over the string from end to beginning.
  for (let i = string.length - 1; i >= 0; i--) {
    // Append current character to the reversed string.
    reversedString += string[i];
  }

  // Return the reversed string.
  return reversedString;
}
