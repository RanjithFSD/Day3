//Convert all the strings to title caps in a string array - Anonymous function


var toTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    });
};
console.log(toTitleCaps(["hello world", "convert all title characters"]));