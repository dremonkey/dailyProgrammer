/* find the sum of all the multiples of a or b below N. But no double counting, i.e. 15 is a multiple of both 3 and 5 so it should only be counted once.*/

var sumMultiplesBelowN = function (n, a, b) {
  // increment through numbers 0 to n
  // at each increment check to see if the number is a multiple of a or b or both
  // if it is, add the number to the current sum

  var sum = 0;
  for (var i = 0; i < n; i++) {
    if (i % (a * b) === 0 || i % a === 0 || i % b === 0) {
      sum += i;
    }
  }

  return sum;
};