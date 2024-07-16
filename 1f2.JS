// Return median of two sorted arrays of the same size - IIFE

(function(arr1, arr2) {
    var merged = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    var mid = Math.floor(merged.length / 2);
    var median = (merged.length % 2 === 0) ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
    console.log(median);
})([1, 3, 5], [2, 4, 6]);