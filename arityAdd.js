/*
Toy problem: Write an add function that does this:
add(1, 2) //=> 3
add(1)(2) //=> 3
*/

var arityAdd = function(i, j) {
    if (arguments.length === 1) {
        return function(j) {
            return i + j;
        };
    } else if (arguments.length === 2) {
        return i + j;
    } else {
        return null;
    }
};