/*

Not Bad

Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.

For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'

*/

function notBad(sentence) {
  var findnot = sentence.indexOf("not"),
      findbad = sentence.indexOf("bad"),
      isnot = sentence.includes("not"),
      thing1 = sentence.substring(0,findnot),
      thing2 = sentence.substring(0,findbad)
  ;
  if(findnot < findbad && isnot == true){
    console.log(thing1 + "good!");
  }
  else{
    console.log(sentence);
  }
}
notBad('This dinner is not that bad');
notBad('This movie is not so bad');
notBad('This dinner is bad!');
