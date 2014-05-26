var sumEvenFibonacci = function() {
    var cache = [0, 1];
    var fib = function(n) {
        for (var i = 2; i <= n; i++) { cache[i] = cache[i-2] + cache[i-1]; }
        return cache[n];
    };

    var counter = 0;
    var result = 0;
    var val = 0;
    // for (var i = 0)
    while (val < 4000000) {
        val = fib(counter);
        counter += 2;
    }

    console.log(cache);
    return cache.reduce(function(a, b) {
        return a + b;
    });
};