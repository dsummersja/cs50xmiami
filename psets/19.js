/*
Multiplication Tables

Write a for loop that will iterate from 0 to 10.
- For each iteration of the for loop,
  it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

- Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
*/

// write your solution here...
for(i=1; i < 11; i++){
  console.log(i+"'s table")
  for(j=1; j < 11; j++){
    console.log(i*j)
  }
}
