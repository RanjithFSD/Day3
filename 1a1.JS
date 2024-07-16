// Do the below programs in anonymous function & IIFE
// 1, Print odd numbers in an array (Anonymous)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let odd = function() {

    var Array = [];
    for (let i = 0; i < numbers.length; i++) {
        
        if (numbers[i] % 2 !== 0) {
            Array.push(numbers[i]);
        }
    }
    console.log(Array)
};

// Call the function
odd();



