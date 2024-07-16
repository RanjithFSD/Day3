// Convert all the strings to title caps in a string array - IIFE

(function(arr) {
    var titleCaps = arr.map(function(str) {
        return str.toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    });
    console.log(titleCaps);
})(["hello world", "convert all title characters"]);