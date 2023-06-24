/**
 * Performs a binary search on a sorted array.
 *
 * @param {number[]} sortedArray The sorted array to search.
 * @param {number} target The target value to search for.
 * @returns {number} The index of the target value in the array, or -1 if the target value is not found.
 *
 * @timeComplexity O(log n) Because, at each iteration of the loop, the search range is halved
 * @spaceComplexity O(1) Only requires a few variables to store the current search range and the target value
 */
function binarySearch(sortedArray: number[], target: number): number {
  /**
   * The current left index of the search range.
   */
  let leftIndex = 0;

  /**
   * The current right index of the search range.
   */
  let rightIndex = sortedArray.length - 1;

  /**
   * Iterates through the search range, comparing the target value to the middle element of the range.
   */
  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    const midElement = sortedArray[midIndex];

    if (midElement < target) {
      /**
       * The target value is greater than the middle element, so the search range is updated to the right half of the array.
       */
      leftIndex = midIndex + 1;
    } else if (midElement > target) {
      /**
       * The target value is less than the middle element, so the search range is updated to the left half of the array.
       */
      rightIndex = midIndex - 1;
    } else {
      /**
       * The target value is found at the middle index of the array.
       */
      return midIndex;
    }
  }

  /**
   * The target value is not found in the array.
   */
  return -1;
}

export default binarySearch;
