// Print odd numbers in an array (IIFE)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function (odd) {
    let Array = [];
    for (let i = 0; i < numbers.length; i++) {
        
        if (numbers[i] % 2 !== 0) {
            Array.push(numbers[i]);
        }
    }
    console.log(Array);
}) ();