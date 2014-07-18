var Graph = function (value) {
    this.value = value;
    this.edges = [];
};

Graph.prototype.addEdge = function (node) {
    this.edges.push(node);
};

Graph.prototype.depthFirstSearch = function (callback) {
    
};

Graph.prototype.breadthFirstSearch = function (callback) {

};