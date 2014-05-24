var rotateMatrix = function (matrix) {
    var rotated = [];
    for (var row = 0; row < matrix.length; row++) {
        rotated[row] = [];
        for (var cell = 0; cell < matrix[0].length; cell++) {
            rotated[row].push(matrix[cell][matrix.length - 1 - row]);
        }
    }
    return rotated;
};