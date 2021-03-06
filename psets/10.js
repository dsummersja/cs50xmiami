/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

// write your solution here...
function tellFortune(numchildren, name, location, job){
  console.log("You will be a "+job+" in "+location+", and married to "+name+" with "+numchildren+" kids.");
}
tellFortune(5, 'Tess', 'Miami', 'entrepreneur');
tellFortune(8, 'Gabriel', 'Miami', 'basketballer');
tellFortune(0, 'your xbox', 'Toronto', 'engineer');
