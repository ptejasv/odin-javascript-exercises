const sumAll = function(a, b) {
    if ((a < 1 || b < 1) || !(Number.isInteger(a) && Number.isInteger(b))) return 'ERROR';
    if (a > b) [a, b] = [b, a];
    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
    //return ((end - start + 1) / 2) * (start + end) for smartypants
};

// Do not edit below this line
module.exports = sumAll;
