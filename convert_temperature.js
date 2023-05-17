var convertTemperature = function(celsius) {
    var result = [];
    var kelvin = celsius + 273.15;
    var fahrenheit = celsius*1.8 + 32;
    result.push(kelvin);
    result.push(fahrenheit);
    return result;
};