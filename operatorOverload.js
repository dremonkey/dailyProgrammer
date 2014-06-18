/* 
    var one = {value: 1};
    var two = {value: 2};
    var result = one + two; // returns "[Object object][Object object]"
    Make result return 3. one and two must remain as objects
*/

var operatorOverload = (function () {
    var one = {value: 1, valueOf: function () { return this.value; }};
    var two = {value: 2, valueOf: function () { return this.value; }};
    console.log(one + two);
    
    // Return an integer wrapper function below to allow any object to do this
    return function (num) {
        return {
            value: num,
            valueOf: function () { return this.value; }
        };
    };
})();

/* A plausible actual use case */
var Vector = function (i, j) {
    var vector = Object.create(Vector.prototype);
    vector.i = i;
    vector.j = j;
    return vector;
};

Vector.prototype.valueOf = function () { 
    // mutate the valueOf function
    Vector.prototype._cached = Vector.prototype.valueOf;
    Vector.prototype.valueOf = function() {
        Vector.prototype.valueOf = Vector.prototype._cached;
        var a = Vector.prototype.left;
        delete Vector.prototype.left;
        delete Vector.prototype._cached;
        return (a.i + this.i).toString() + "," + (a.j + this.j).toString();
    };
    Vector.prototype.left = this;
    return ""; 
};