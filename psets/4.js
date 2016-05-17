/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var celsius = 0,
    fahrenheit = 32,
    ctof = celsius * 9 / 5 + 32,
    ftoc = (fahrenheit - 32) * 5 / 9
;
console.log(celsius+"C is "+ctof+"F and "+fahrenheit+"F is "+ftoc+"C");
