var binarySearchArray = function (array, target, min, max) {
    var min = min || 0;
    var max = max || array.length - 1;
    
    if (max < min) { 
        return -1; 
    } else {
        var middle = min + Math.floor((max - min) / 2);
        if (array[middle] > target) {
            return binarySearchArray(array, target, min, middle - 1);
        } else if (array[middle] < target) {
            return binarySearchArray(array, target, middle + 1, max);
        } else {
            return middle;
        }
    }
};