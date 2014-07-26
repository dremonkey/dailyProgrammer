/* do a spiral traverse of an NxN matrix and output a flat array
 * for example given a matrix that looks like this:
 [1 3 6]
 [9 7 5]
 [2 8 4]
 * your output should look like this: [1 3 6 5 4 8 2 9 7]
 */

var spiralTraversal = function (matrix) {
  var output = [];
  var startRow = 0;
  var endRow = matrix.length - 1;
  var startCol = 0;
  var endCol = matrix[0].length - 1;
  var len = matrix[0].length * matrix.length;

  var traverse = function (rowOrCol, start, end) {
    var i;

    // if going backwards
    if (start > end) {
      for (i = start; i >= end; i--) {
        output.push(rowOrCol[i]);
      }
    } else {
      for (i = start; i <= end; i++) {
        output.push(rowOrCol[i]);
      }
    }
  };

  var getCol = function (colNum) {
    var col = [];
    
    for (var i = 0; i < matrix.length; i++) {
      col.push(matrix[i][colNum]);
    }

    return col;
  };


  var nextCol = endCol;
  var nextRow = startRow;

  while (output.length < len) {
    // left to right
    if (startRow === nextRow) {
      traverse(matrix[startRow], startCol, endCol);
      startRow++;
      nextCol = endCol;
    }
    // top to bottom
    else if (endCol === nextCol) {
      traverse(getCol(endCol), startRow, endRow);
      endCol--;
      nextRow = endRow;
    }
    // right to left
    else if (endRow === nextRow) {
      traverse(matrix[endRow], endCol, startCol);
      endRow--;
      nextCol = startCol;
    }
    // bottom to top
    else if (startCol === nextCol) {
      traverse(getCol(startCol), endRow, startRow);
      startCol++;
      nextRow = startRow;
    }
  }

  return output;

  // loop through the cols
  // when you have hit max cols, increment start row and loop through the rows
  // when you have hit max rows, decrement last col and loop through the cols backwards
  // when you get to the first column, decrement last row and loop through the rows backwards
  // repeat from step 1, beginning at the start row
};

var matrix = [
   [1, 3, 6],
   [9, 7, 5],
   [2, 8, 4]
];

console.log(spiralTraversal(matrix));