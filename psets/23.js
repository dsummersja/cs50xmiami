/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
var movie  = {
  title: "Good Will Hunting",
  duration: 126,
  stars:["Matt Damon", " Ben Affleck", " Robin Williams"],
  information: function () {
      console.log(movie.title+" lasts for "+movie.duration+" minutes. "+" Stars: " +movie.stars);
  }
}
movie.information();
