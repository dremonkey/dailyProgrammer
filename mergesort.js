/**
 * Implement a function that sorts an array of numbers using the "mergesort" algorithm.
 *
 * Mergesort is an optimized sorting algorithm which is a common choice to implement `sort`
 * methods in standard libraries as an alternative to quicksort or heapsort. (For example,
 * Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and
 * Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)
 *
 * Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N
 * as a set of N "sublists" of length 1, which are considered to be sorted. Adjacent sublists are then
 * "merged" into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so
 * on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
 * after the first merge, and so on.)
 *
 * This can be implemented using either a recursive ("top-down") or an iterative ("bottom-up") approach.
 *
 * Illustration:
 *
 *   Initial step: Input array is split into "sorted" sublists
 *   [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]
 *
 *   Merge step: Adjacent sublists are merged into sorted sublists
 *   [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]
 *
 *   Repeat merge step:
 *   [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]
 *
 *   Repeat merge step:
 *   [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]
 *
 *   Done! Return the sorted array:
 *   [1,2,3,4,4,7,9]
 *
 */

// @NOTE Avoid splice, slice, shift, and unshift if worried about performance

/*
 * @param {array} array - the array to be sorted
 * @param {int} start - the index (inclusive) from which this subarray starts 
 * @param {int} len - the index (exclusive) at which this subarray ends
 */
var mergeSort = function(array, start, end) {
  start = start || 0;
  end = end || array.length;

  // calculate the length of the array and derive the mid point
  var len = end - start;
  var mid = start + ~~(len/2);

  // Base case, i.e. sorted array of length 1
  if (len <= 1) return [array[start]];

  // Instead of using slice, we are keeping track of the start, mid, and end indices 
  var left = mergeSort(array, start, mid);
  var right = mergeSort(array, mid, start+len);

  // merge the left and right
  return merge(left, right);
};

// Responsible for merging two sorted arrays so that the resulting array is still sorted
var merge = function (left, right) {
  var merged = [];
  var i = 0;
  var j = 0;

  while (i < left.length && j < right.length) {
    if(left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  
  // Any remaining elements are added to the end
  merged = merged.concat(left.slice(i)).concat(right.slice(j));

  return merged;
};

var input = [];
var sorted;
var n = 10;

for (var i = 0; i < n; i++) {
  var number = ~~(Math.random() * n);
  input.push(number);
}

// sorted = input.sort(function (a,b) {return a - b;}); // sort numerically, not lexicographically

sorted = mergeSort(input);
console.log(sorted);
