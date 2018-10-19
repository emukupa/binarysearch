function binary_search(arr: Array<number>, target: number): number {
  // initialize the left and right variables
  let left: number = 0;
  let right: number = arr.length - 1;

  while (left <= right) {
    const middle: number = Math.floor((left + right) / 2);
    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      // found the target
      return middle;
    }
  }
  return -1;
}

// test case

const arr1: Array<number> = [3, 4, 7, 9, 12, 78];
const term: number = 4;

const res1: number = binary_search(arr1, term);

console.log(res1); // console log 1
