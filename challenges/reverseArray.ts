/**
 * Reverses the order of the elements in an array.
 *
 * @param {any[]} array The array to reverse
 * @returns {any[]} The reversed array
 * @timeComplexity O(n)
 * @spaceComplexity O(1)
 */
export default function reverseArray(array: any[]): any[] {
  // Set left and right cursors
  let left = 0;
  let right = array.length - 1;

  // While before left cursor meet the right cursor
  while (left < right) {
    // Swap the left cursor value with right cursor value
    const leftValue = array[left];
    array[left] = array[right];
    array[right] = leftValue;

    // Increase left cursor and decrease right cursor
    left++;
    right--;
  }

  // Return the reversed array
  return array;
}
