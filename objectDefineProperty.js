// Make the following statement evaluate to true:
// (a === 1) && (a === 2) && (a === 3)

var objectDefinePropertyHack = (function() {
    var count = 0;
    Object.defineProperty(this, 'a', {
        get: function() { return ++count; }
    });
    console.log((a === 1) && (a === 2) && (a === 3));
})();