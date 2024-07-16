// Return all the palindromes in an array - IIFE
(function(arr) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }
    var palindromes = arr.filter(isPalindrome);
    console.log(palindromes);
})(["madam", "hello", "racecar", "world"]);