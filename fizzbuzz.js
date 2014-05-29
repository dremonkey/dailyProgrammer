/* 
"Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”."
*/

var fizzbuzz = function() {
    var results = [];
    for (var i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) { 
            results.push('FizzBuzz');
        } else {
            if (i % 5 === 0) { results.push('Buzz'); }
            else if (i % 3 === 0) { results.push('Fizz'); }
            else { results.push(i.toString()); }
        }
    }
    console.log(results);
};

