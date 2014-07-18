var Graph = function (value) {
    this.value = value;
    this.edges = [];
};

Graph.prototype.addEdge = function (node) {
    this.edges.push(node);
};

Graph.prototype.depthFirstSearch = function (visitCallback) {
    var pointers = [];
    var traverse = function (node) {
        visitCallback(node);
        pointers.push(node);
        node._discovered = true;
        for (var i = 0; i < node.edges.length; i++) {
            if (!node.edges[i]._discovered) { node.edges[i].depthFirstSearch(visitCallback); }
        }
    };
    traverse(this);

    for (var i = 0; i < pointers.length; i++) { delete pointers[i]._discovered; }
};

Graph.prototype.breadthFirstSearch = function (visitCallback) {
    var pointers = [];

    var queue = [];
    queue.shift(this);
    while (queue.length > 0) {
        var node = queue.pop();
        pointers.push(node);
        visitCallback(node);
        node._discovered = true;
        for (var i = 0; i < node.edges.length; i++) {
            if (!this.edges[i]._discovered) { queue.shift(node.edges[i]); }
        }
    }

    // clean up pointers
    for (var i = 0; i < pointers.length; i++) { delete pointers[i]._discovered; }
};