import math


def binary_search(arr, target):
    left = 0
    right = len(arr) - 1

    while left <= right:
        middle = math.floor((left + right) / 2)
        if arr[middle] < target:
            left = middle + 1
        elif arr[middle] > target:
            right = middle - 1
        else:
            return middle
    return None


# test case
array = [3, 4, 7, 9, 12, 78]
search_term = 4

res = binary_search(array, search_term)

print(res)  # prints 1
