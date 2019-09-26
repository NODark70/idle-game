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
var milk = new Button('Eat Milk', btnPress);   // Create a button element
milk.hide()
var applesauce = new Button('Eat Applesauce', btnPress);   // Create a button element
var points = new Button ('Collect life points', btnPress);
var grow = new Button ('Grow', btnPress);
var store = new Button ('Store', btnPress);
var el school = new Button ('Attend elementary school', btnPress);
var m school = new Button ('Attend middle school', btnPress);
var h school = new Button ('Attend high school', btnPress);
var college = new Button ('Apply for college', btnPress);
var graduate = new Button ('Graduate', btnPress);





column1.add(text1);
column2.add(text2);

var scr = new Text(score);                    // Create a text element
//changes
setInterval(btnPress, 1000);   // Set up a loop


function btnPress() {
  score++;         // Increase the score
  //scr.edit(score); // Update the page with the new score
  if(score > 10) {
    hidden.hide(500);
  }
  if(score < 15)
    hidden.hide(500);


  score++;
  scr.edit(score);
}
