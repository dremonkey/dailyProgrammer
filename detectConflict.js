// given an array of ranges (e.g. [[1, 10], [10, 12], [11, 15]]), detect whether there are any intersections

var detectConflict = function (ranges) {
    var result = false;
    ranges.sort(function (a, b) {
        return a[0] - b[0];
    }).reduce(function (a, b) {
        console.log(a, b);
        if (b[0] > a[0] && b[0] < a[1]) result = true;
        return b;
    });
    return result;
};