function Celsius_to_Fahrenheit(value){
    return (value*(9/5)) + 32 
}
function Celsius_to_Kelvin(value){
    return value + 273.15
}
function Fahrenheit_to_Celsius(value){
    return (value - 32)*(5/9)
}
function Fahrenheit_to_Kelvin(value){
    return Fahrenheit_to_Celsius(value) + 273.1515
}
function Kelvin_to_Fahrenheit(value){
    return (value-273.15)*(9/5) + 32
}
function Kelvin_to_Celsius(value){
    return value - 273.15
}