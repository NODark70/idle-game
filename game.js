var score = 1; // Create a variable to store the score in

var title = new Title('The Game of Life'); // Create a title element
var button = new Button('Go', btnPress);   // Create a button element
var button = new Button('Rules', btnPress);   // Create a button element
var button = new Button('High Scores', btnPress);   // Create a button element


var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function btnPress() {
  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score < 15) {
    hidden.hide(500);
  }
}


var button = new Button('Grow', btnPress);   // Create a button element
var button = new Button('Eat Milk', btnPress);   // Create a button element
var button = new Button('Eat Applesauce', btnPress);   // Create a button element
var button = new Button('Life Points', btnPress);   // Create a button element
var button = new Button('High Scores', btnPress);   // Create a button element
var button = new Button('High Scores', btnPress);   // Create a button element
var button = new Button('High Scores', btnPress);   // Create a button element
var button = new Button('High Scores', btnPress);   // Create a button element
var button = new Button('High Scores', btnPress);   // Create a button element
