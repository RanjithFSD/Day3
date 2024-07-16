//Return all the prime numbers in an array - anonymous function

var getPrimeNumbers = function(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    return arr.filter(isPrime);
};
console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));