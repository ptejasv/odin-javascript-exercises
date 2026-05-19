const convertToCelsius = function(temp) {
    return Number(Math.round(((temp - 32) * (5/9)) + 'e1') + 'e-1');
};

const convertToFahrenheit = function(temp) {
    return Number(Math.round(((temp * (9/5)) + 32) + 'e1') + 'e-1');
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
