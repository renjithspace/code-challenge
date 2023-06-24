import { describe, test, expect } from "@jest/globals";
import binarySearch from "../challenges/binarySearch";

describe("binarySearch", () => {
  test("should return the index of the target value if it is found", () => {
    const index = binarySearch([1, 3, 5, 7, 9], 5);
    expect(index).toEqual(2);
  });

  test("should return -1 if the target value is not found", () => {
    const index = binarySearch([1, 3, 5, 7, 9], 10);
    expect(index).toEqual(-1);
  });
});
