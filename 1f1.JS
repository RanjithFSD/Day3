// Return median of two sorted arrays of the same size - Anonymous function

var getMedianOfArrays = function(arr1, arr2) {
    var merged = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    var mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};
console.log(getMedianOfArrays([1, 3, 5], [2, 4, 6]));