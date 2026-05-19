const repeatString = function(str, numRepeats) {
    if (numRepeats < 0) return 'ERROR';
    let res = "";
    for (numRepeats; numRepeats > 0; numRepeats--) {
        res += str;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
