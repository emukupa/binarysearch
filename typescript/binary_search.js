function binary_search(arr, target) {
    // initialize the left and right variables
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var middle = Math.floor((left + right) / 2);
        if (arr[middle] < target) {
            left = middle + 1;
        }
        else if (arr[middle] > target) {
            right = middle - 1;
        }
        else {
            // found the target
            return middle;
        }
    }
    return -1;
}
// test case
var arr1 = [3, 4, 7, 9, 12, 78];
var term = 4;
var res1 = binary_search(arr1, term);
console.log(res1); // console log 1
