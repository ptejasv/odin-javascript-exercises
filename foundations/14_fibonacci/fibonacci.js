const fibonacci = function(n) {
    n = Number(n); 

    if (n < 0) return "OOPS";
    if (n <= 1) return n;

    let first = 0, second = 1, current = 0;

    // iterative bottom-up approach
    while (n-- > 1) {
        current = first + second;
        first = second;
        second = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
