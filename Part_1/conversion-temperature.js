// Fonction de conversion de Celsius en Fahrenheit
function celsiusEnFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Fonction de conversion de Fahrenheit en Celsius
function fahrenheitEnCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let tempCelsius = 20;
let tempFahrenheit = celsiusEnFahrenheit(tempCelsius);
console.log(`${tempCelsius}°C équivaut à ${tempFahrenheit}°F`);

tempFahrenheit = 68;
tempCelsius = fahrenheitEnCelsius(tempFahrenheit);
console.log(`${tempFahrenheit}°F équivaut à ${tempCelsius}°C`);
