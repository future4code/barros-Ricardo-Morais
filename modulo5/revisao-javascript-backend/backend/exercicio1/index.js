const assert = require('assert');




// Converte celsius em kelvin

function toKelvin(celsius){
    return celsius + 273.15
}


// Converte celsius em fahrenheit

function toFahrenheit(celsius) {
    return celsius / 5 * 9 + 32;
}


try {
    const celsius    = 100
    const fahrenheit = 212
    const kelvin = 273.15

    assert.equal(celsius, toCelsius(fahrenheit));
    assert.equal(kelvin, toKelvin(celsius));

} catch(e) {
    console.log(e);
}

console.log(`20 graus Celcius em Fahrenheit é ${toFahrenheit(20)}`);
console.log(`20 graus Celcius em Kelvin é ${toKelvin(20)}`);
