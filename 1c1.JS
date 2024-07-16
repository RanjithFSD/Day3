// Sum of all numbers in an array Anonymous
var sumOfNumbers = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};
console.log(sumOfNumbers([1, 2, 3, 4, 5]));