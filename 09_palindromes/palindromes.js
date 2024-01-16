const palindromes = function (str) {
    arr = str.toLowerCase().match(/[a-z0-9]/g);
    return arr.slice(0, Math.floor(arr.length/2)).join('')
    === 
    arr.slice(-Math.floor(arr.length/2)).reverse().join('');   
};

// Do not edit below this line
module.exports = palindromes;
