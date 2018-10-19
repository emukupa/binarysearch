const binarySearch = (arr, target) => {
  // initially left and right
  let [left, right] = [0, arr.length - 1];

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] < target) {
      left = middle + 1;
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else {
      // found the target
      return middle;
    }
  }
  // not found the target
  return -1;
};

// test case

const array = [3, 4, 7, 9, 12, 78];
const searchTerm = 4;

const result = binarySearch(array, searchTerm);

console.log(result); // console log 1
