var score = 1; // Create a variable to store the score in

var title = new Title('In the Year 2099'); // Create a title element
var button = new Button('Be Born', btnPress);   // Create a button element
var button = new Button('Rules', btnPress);   // Create a button element
var button = new Button('High Scores', btnPress);   // Create a button element
var text1 = new Text('You have entered the world!');  // Create some text to go in the columns
var text2 = new Text('What you do from now on can impact your future!');
var text3 = new Text('Good luck');

var rowSection = new Section('row'); // Create the row to store the columns in
var column1 = new Section('col');    // Create the first column
var column2 = new Section('col');    // Create the second column

//var button = new Button('Grow', btnPress);   // Create a button element
var button = new Button('Eat Milk', btnPress);   // Create a button element
var button = new Button('Eat Applesauce', btnPress);   // Create a button element
var button = new Button ('Collect life points', btnPress);





column1.add(text1);
column2.add(text2);

var scr = new Text(score);                    // Create a text element

setInterval(btnPress, 1000);   // Set up a loop

function getMilk (){

var text4 = new Text('You are now full');

}


function eatApplesauce(){


}


function btnPress() {

  score++;         // Increase the score
  scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.show();
  }
  if(score < 15)
    hidden.hide(500);
  

  score++;
  scr.edit(score);
}
