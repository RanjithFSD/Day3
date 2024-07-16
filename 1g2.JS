// Remove duplicates from an array - IIFE

(function(arr) {
    var unique = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
    console.log(unique);
})([1, 2, 2, 3, 4, 4, 5]);