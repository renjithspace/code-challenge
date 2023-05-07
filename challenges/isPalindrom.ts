/**
 * Check whether the provided word is palindrom or not
 *
 * @param word The word
 * @returns The word is palidrom or not
 *
 * @timecomplexity O(n/2) that's O(n)
 * @spacecomplexity O(1)
 */

export default function isPalindrom(word: string) {
  const midIndex = Math.floor(word.length / 2);

  // Loop until middle index
  for (let index = 0; index < midIndex; index++) {
    const leftChar = word.charAt(index);
    const rightIndex = word.length - 1 - index;
    const rightChar = word.charAt(rightIndex);

    // If difference in left and right chars then that's not a palidrom
    if (leftChar !== rightChar) {
      return false;
    }
  }

  // Otherwise it's a palindrom
  return true;
}
