// Sum of all numbers in an array - Arrow functions

const sumOfNumbers = (arr) => arr.reduce((sum, num) => sum + num, 0);
console.log(sumOfNumbers([1, 2, 3, 4, 5]));