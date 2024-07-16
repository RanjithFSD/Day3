// Convert all the strings to title caps in a string array - Arrow functions

const toTitleCaps = (arr) => arr.map(str => 
    str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
);
console.log(toTitleCaps(["hello world", "convert all title characters"]));