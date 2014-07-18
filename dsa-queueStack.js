var Queue = function () {
    this._storage = {};
    this._begin = 0;
    this._end = 0;
    this.length = 0;
};
Queue.prototype.enqueue = function (value) {
    this._storage[this._end] = value;
    this.length++;
    this._end++;
    return this;
};
Queue.prototype.dequeue = function () {
    if (this.length === 0) { return null; }
    this._begin++;
    this.length--;
    return this._storage[this._begin - 1];
};

var Stack = function () {
    this._storage = {};
    this.length = 0;
};
Stack.prototype.push = function (value) {
    this._storage[this.length] = value;
    this.length++;
    return this;
};
Stack.prototype.pop = function () {
    if (this.length === 0) { return null; }
    this.length--;
    return this._storage[this.length];
};