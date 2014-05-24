var sumMultiplesBelowN = function (n, a, b) {
    var arithSeries = function (n) {
        return (n * (n+1)) / 2;
    };

    var sumA = a * arithSeries(Math.floor((n - 1) / a));
    var sumB = b * arithSeries(Math.floor((n - 1) / b));
    var intersect = (a * b) * arithSeries(Math.floor((n - 1) / (a * b)));

    return sumA + sumB - intersect;
};