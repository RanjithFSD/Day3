// Return all the palindromes in an array - anonymous function

var getPalindromes = function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    return arr.filter(isPalindrome);
};
console.log(getPalindromes(["madam", "hello", "racecar", "world"]));