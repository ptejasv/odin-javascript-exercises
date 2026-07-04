const palindromes = function (str) {
    // clean up punctuation and capitalisation inconsistencies
    str = str.toLowerCase().replace(/\W/g, "").replace();

    // 2 pointer iteration
    for (let i = 0; i < Math.floor(str.length/2); i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    };

    return true;
}

// Do not edit below this line
module.exports = palindromes;
