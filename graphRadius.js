var graphRadius = function (matrix) {
    var adjacencies = matrix.slice(); // don't mutate original array
    var radius = 1;

    var jumpCount = function(matrix, origin, target, stepCount) {
        stepCount = stepCount || 0;
        var jumps = matrix[origin][target];
        if (jumps > 0) { 
            console.log("Final jump:", matrix, origin, target, jumps + stepCount);
            return jumps + stepCount; 
        } else {
            var closest = Math.min.apply(null, matrix[origin].filter(function(elem) { return elem > 0; }));
            var waypoint = matrix[origin].indexOf(closest);
            return jumpCount(matrix, waypoint, target, stepCount + 1);
        }
    };

    for (var i = 0; i < adjacencies.length; i++) {
        var node = adjacencies[i];
        for (var j = 0; j < node.length; j++) {
            var link = node[j];
            if (link === 0) {
                var jumps = jumpCount(adjacencies, i, j);
                radius = radius > jumps ? radius : jumps;
                adjacencies[i][j] = jumps;
                adjacencies[j][i] = jumps;
            }
        }
    }
    return radius;
};

graphRadius.matrix = [
    [-1, 0, 1, 1],
    [0, -1, 1, 0],
    [1, 1, -1, 1],
    [1, 0, 1, -1]
];

/* 
In graph theory, a graph's radius is the minimum eccentricity of any vertex for a given graph. More simply: it is the minimum distance between all possible pairs of vertices in a graph.
As an example, the Petersen graph has a radius of 2 because any vertex is connected to any other vertex within 2 edges.
On the other hand, the Butterfly graph has a radius of 1 since its middle vertex can connect to any other vertex within 1 edge, which is the smallest eccentricity of all vertices in this set. Any other vertex has an eccentricity of 2.
Formal Inputs & Outputs
Input Description
On standard console input you will be given an integer N, followed by an Adjacency matrix. The graph is not directed, so the matrix will always be reflected about the main diagonal.
Output Description
Print the radius of the graph as an integer.
Sample Inputs & Outputs
Sample Input
10
0 1 0 0 1 1 0 0 0 0
1 0 1 0 0 0 1 0 0 0
0 1 0 1 0 0 0 1 0 0
0 0 1 0 1 0 0 0 1 0
1 0 0 1 0 0 0 0 0 1
1 0 0 0 0 0 0 1 1 0
0 1 0 0 0 0 0 0 1 1
0 0 1 0 0 1 0 0 0 1
0 0 0 1 0 1 1 0 0 0
0 0 0 0 1 0 1 1 0 0
Sample Output
2
*/