// Given a string, find the start position of the largest block of repeated characters.
// If equal in length, return the first substring
// E.g. f(aaaabbbb) = '0' // not 4

var longestRepeatedSequence = function(str) {
    str += (str[str.length - 1] === '0') ? '1' : '0'; // add null-ish character
    var candidate = {};
    candidate.position = 0;
    candidate.length = 1;

    var stack = str[0].toString();
    for (var i = 1; i < str.length; i++) {
        if (str[i] === stack[stack.length - 1]) {
            stack += str[i].toString();
        } else {
            if (stack.length > candidate.length) {
                candidate.position = i - stack.length;
                candidate.length = stack.length;
            }
            stack = str[i].toString();
        }
    }

    return candidate.position;  
};