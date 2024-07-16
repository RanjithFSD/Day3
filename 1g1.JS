// Remove duplicates from an array - Anonymous functions

var removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));