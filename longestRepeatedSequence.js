// Given a string, find the start position of the largest block of repeated characters.
// If equal in length, return the first substring
// E.g. f(aaaabbbb) = '0' // not 4

var longestRepeatedString = function (string) {
  var startPos = 0;
  var i = 0;
  var maxCount = 0;
  var tmpPos = null;
  var tmpCounter = 1;

  // loop through the string
  while (i < string.length) {
    var current = string[i];
    var next = string[i+1];

    // check the next index to see if it is the same as the current
    // if it is the same, start a counter and save the current index
    if (current === next) {
      tmpCounter++;
      if (tmpPos === null) tmpPos = i;
    } else {
      // check the current count against the maxcount
      // if it is more than the maxcount, set maxcount equal to count and save the index
      if (tmpCounter > maxCount) {
        maxCount = tmpCounter;
        startPos = tmpPos;
      }

      // reset the tmpCounter and tmpPost
      tmpCounter = 1;
      tmpPos = null;
    }

    i++;
  }

  return startPos;
};
