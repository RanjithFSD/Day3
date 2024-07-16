let stringArray = ["hello world", "good morning", "have a nice day"];

let titleCapsArray = stringArray.map(function(str) {
    return str.toLowerCase().replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
});

console.log(titleCapsArray); 