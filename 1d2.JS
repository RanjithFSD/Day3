// Return all the prime numbers in an array - IIFE

(function(arr) {
    function isPrime(num) {
        if (num <= 1) return false;
        for (var i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    var primes = arr.filter(isPrime);
    console.log(primes);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);