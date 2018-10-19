import 'dart:math';

main() {
  int binary_search(List<int> arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
      int middle = ((left + right) / 2).floor();
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
  }

  List<int> array = [3, 4, 7, 9, 12, 78];
  int search_term = 4;

  int res = binary_search(array, search_term);

  print(res); // prints 1
}
