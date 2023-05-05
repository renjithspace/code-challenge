/**
 * Check whether the provided two words are anagram or not
 *
 * @param firstWord The first word
 * @param secondWord The second word
 * @returns Two words are anagram or not
 *
 * Time complexity O(n)
 * Space complexity O(1)
 */
export function isAnagram(firstWord: string, secondWord: string) {
  // If two words length different then it's not anagram
  if (firstWord.length !== secondWord.length) return false;

  // Convert the words to lower case for case insensitivity
  firstWord = firstWord.toLowerCase();
  secondWord = secondWord.toLowerCase();

  // Create an array of characters count of first word
  const firstWordCharCodes = new Array(26).fill(0);
  for (let index = 0; index < firstWord.length; index++) {
    const charCodeIndex = firstWord.charCodeAt(index) - 97;
    firstWordCharCodes[charCodeIndex]++;
  }

  // Create an array of characters count of second word
  const secondWordCharCodes = new Array(26).fill(0);
  for (let index = 0; index < secondWord.length; index++) {
    const charCodeIndex = secondWord.charCodeAt(index) - 97;
    secondWordCharCodes[charCodeIndex]++;
  }

  // If the characters counts are different, it's not an angram
  for (let index = 0; index < firstWordCharCodes.length; index++) {
    if (firstWordCharCodes[index] !== secondWordCharCodes[index]) {
      return false;
    }
  }

  // Otherwise it's an anagram
  return true;
}
