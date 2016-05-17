/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...
var currentyr = 2016,
    birthyr = 1993,
    age1 = currentyr - birthyr,
    age2 = currentyr - birthyr - 1
;
console.log("They are either "+ age1 + " or " + age2);
