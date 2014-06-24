/* Write a method sum that takes an unlimited number of integer arguments and reject non-integers */
var unlimitedSums = function () {
  return Array.prototype.slice.call(arguments, 0).reduce(function (a, b) {
    return (typeof b !== "number" || b !== ~~b) ? a : a + b;
  }, 0);  
};