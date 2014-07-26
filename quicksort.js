var quickSort = function (array, left, right) {
  left = left || 0;
  right = right || array.length-1;

  index = partition(array, left, right);

  // Sort the left half
  if (left < index - 1) {
    quickSort(array, left, index -1);
  }

  // Sort the right half
  if (index < right) {
    quickSort(array, index, right);
  }

  return array;
};

/*
 * Partition sorts a subarray around a specific pivot point so that
 * all elements to the left of the pivot are smaller than the pivot
 * while all elements to the right of the pivot are larger. 
 *
 * @param {array} array - the array to be sorted
 * @param {int} left - the left most indice of the sub-array
 * @param {int} right - the right most indice of the sub-array
 */
var partition = function (array, left, right) {
  var pivot = array[left + ~~((right-left)/2)];

  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    // Swap elements and move left and right indices
    if (left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }

  return left;
};

/*
 * Does an in-place swap two items in the array
 */
var swap = function (array, left, right) {
  var tmp = array[left];

  array[left] = array[right];
  array[right] = tmp;
};

// Test

var input = [];
var sorted;
var n = 1000000;

for (var i = 0; i < n; i++) {
  var number = ~~(Math.random() * n);
  input.push(number);
}

sorted = quickSort(input);