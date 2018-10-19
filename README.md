# Binary Search

In CS, binary search(half interval search, logarithmic search, binary chop) looks for a target in a **sorted** array.

## Sorted array

|     |         Description         |  Big O   |
| :-: | :-------------------------: | :------: |
|  1  |   Worst-case performance    | O(log n) |
|  2  |    Best-case perfomance     |   O(1)   |
|  3  |     Average performance     | O(log n) |
|  4  | Worst-case space complexity |   O(1)   |

## Subroutine 1

**The following subroutine checks whether the A[middle] equals the target on every iteration.**

Given a sorted array A of n elements, we can search for a target T using:

1. Set left to 0 and right to n - 1. (n - 1) because arrays are zero indexed.
2. If left > right, the target is not in the array, terminate search.
3. Set the middle to floor of (left + right) / 2.
4. If A[middle] < T, set left to middle + 1 and go to step 2.
5. If A[middle] > T, set right to middle - 1 and go to step 2.
6. If A[middle] = T, target found, and so return the index, middle.

## Pseudo code for sub1

```{r, eval=FALSE}
function binary_search(A, n, T):
  left := 0
  right := n - 1

  while left <= right:
    middle := floor((left + right) / 2)
    if A[middle] <  T:
      left := middle + 1
    else if A[middle] > T:
      right := middle - 1
    else:
      return middle
  return not found
```

## Subroutine 2

**The following approach only checks whether the A[middle] equals the target when left equals right.**

1. Set left to 0 and right to n - 1.
2. If left equals right, go to step 6.
3. Set the middle to the ceiling of (left + right) / 2.
4. If A[middle] > T, set right to middle - 1 and go to step 2.
5. Set left to the middle and go to step 2.
6. Since left equals right, the search is done. Do the check now, is A[left] equal to the target? If so, return left otherwise, target not found.

## pseudo code for sub2

```{r, eval=FALSE}
function binary_search(A, n, T):
  left := 0
  right := n - 1

  while left < right:
    middle := ceiling((left + right) / 2)
    if A[middle] > T:
      right := middle - 1
    else:
      left := middle
  if A[left] equal T:
    return left
  else:
    return not found
```

## Duplicates: Left Most Subroutine

1. Set left to 0 and right to n.
2. If left >= right, go to 6.
3. Set the middle to the floor of (left + right) / 2.
4. If A[middle] < T, set the left to middle + 1 and go to step 2.
5. Otherwise, if A[middle] >= T, set right to the middle and go to step 2.
6. Since left equals right, search is complete. Return left.

**if left is less than n and A[left] equals T, left is the rank of T or the number of elements in the array less than T.**

## pseudo code for duplicate - left most

```{r, eval=FALSE}
function binary_search_left_most(A, n, T):
  left := 0
  right := n

  while left < right:
    middle := floor((left +right) / 2)
    if A[middle] < T:
      left := middle + 1
    else:
      right := middle
  return left
```

## Duplicates: Right Most Subroutine

1. Set left to 0 and right to n.
2. If left >= right, go to 6.
3. Set middle to floor of (left + right) / 2.
4. If A[middle] > T, set the right to the middle and go to step 2.
5. Otherwise, if A[middle] <= T, set left to middle + 1 and go to step 2.
6. Since left equals right, search is complete. Return left - 1.

**if left is greater than 0 and A[left - 1] equals T, left - 1 is the rank of T or n - (Left - 1) is the number of elements in the array greater than T.**

## pseudo code for duplicate - right most

```{r, eval=FALSE}
function binary_search_right_most(A, n, T):
  left := 0
  right := n

  while left < right:
    middle := floor((left + right) / 2)
    if A[middle] > T:
      right := middle
    else:
      left := middle + 1
  return left - 1
```

## Code Implementation in Computer Languanges

1. [Python](/python)
2. [JavaScript](/javascript)
3. [TypeScript](/typescript)
4. Dart
5. PHP
6. C++
7. Java
8. C#
9. Swift
10. Kotlin
