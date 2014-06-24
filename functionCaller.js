function callee(baz) {
    var foo = callee.caller.toString();
    console.log(foo, baz);
}

(function() {
    var foo = "bar";
    callee(" world");
})();

// hook into caller using function.caller;
// scan func.toString() and parse the variables within