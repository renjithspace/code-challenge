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
  if (firstWord.length !== secondWord.length) return false;
  firstWord = firstWord.toLowerCase();
  secondWord = secondWord.toLowerCase();
  const firstWordCharCodes = new Array(26).fill(0);
  for (let index = 0; index < firstWord.length; index++) {
    const charCodeIndex = firstWord.charCodeAt(index) - 97;
    firstWordCharCodes[charCodeIndex]++;
  }
  const secondWordCharCodes = new Array(26).fill(0);
  for (let index = 0; index < secondWord.length; index++) {
    const charCodeIndex = secondWord.charCodeAt(index) - 97;
    secondWordCharCodes[charCodeIndex]++;
  }
  for (let index = 0; index < firstWordCharCodes.length; index++) {
    if (firstWordCharCodes[index] !== secondWordCharCodes[index]) {
      return false;
    }
  }
  return true;
}
