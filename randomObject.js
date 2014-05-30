/*Implement the following method:

Object.prototype.random(): returns randomly one of the values of the object. For example:

var obj = {
    a: 1,
    b: {
        x: 2,
        y: 3
    },
    c: {
        z: {
            q: 4
        }
    }
};

obj.random(); //returns 1 or 2 or 3 or 4. All values have the same probability to be returned

obj = {};

obj.random(); //returns undefined
*/

Object.prototype.random = function() {
    var values = [];
    var recurser = function(obj) {
        for (var k in obj) {
            if (!obj.hasOwnProperty(k)) { continue; }
            if (typeof obj[k] === 'function') { continue; }

            if (typeof obj[k] === 'object') {
                recurser(obj[k]);
            } else {
                values.push(obj[k]);
            }
        }
    };

    recurser(this);
    return values[Math.floor(Math.random()*values.length)];
};

