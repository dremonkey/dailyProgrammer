// Write a function that returns the longest contiguous sum in an array
// The "contiguous" part can be a loop so for example if the array is [1,-5,3]
// the largest contiguous sum is 4, because you start at index 2 (aka 3) and loop
// to the beginning.

var localMaximum = function (index, array) {
  var localMax = null;
  var nextSum = 0;
  var i = index;
  var j = 0;

  while (j < array.length) {
    // get the next sum
    nextSum += array[index];

    // if nextSum is more than the localMax, save it to localMax
    if (nextSum > localMax || localMax === null) localMax = nextSum;

    // increment the index
    index++;

    // if at the end of the array, start from the beginning
    if (index === array.length) index = 0;

    // increment our counter
    j++;
  }

  return localMax;
};

var largestContiguousSum = function (array) {
  var globalMax = null;

  // find the local maximums
  for (var i = 0; i < array.length; i++) {
    var localMax = localMaximum(i, array);
    if (localMax > globalMax || globalMax === null) {
      globalMax = localMax;
    }
  }

  // retrieve the largest of the local maximums
  return globalMax;
};

console.log(largestContiguousSum([1,2,3]));
console.log(largestContiguousSum([1,-1,3]));
console.log(largestContiguousSum([1,-1,2,-2,3]));
console.log(largestContiguousSum([-10,-1,-100,-50]));