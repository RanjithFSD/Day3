// Return all the palindromes in an array - Arrow functions

const isPalindrome = (str) => str === str.split('').reverse().join('');
const getPalindromes = (arr) => arr.filter(isPalindrome);
console.log(getPalindromes(["madam", "hello", "racecar", "world"]));