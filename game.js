var score = 0;

var title = new HTMLElement('h1', 'Welcome to the Game');
var button = new Button('hello');
var buttonWorld = new Button('world');
var columns = new Columns(2);

createButton('Kof', btnPress); // Make a button
changeTitle('Clicker Game');
createButton('bam', btnPress); // Make a button
changeTitle('Clicker Game');

columns.addToColumn(1, buttonWorld);
columns.addToColumn(2, button);

function btnPress() {
  score++;
  postToPage(score);

if(score > 10){

  return "Congrats... your score is humongous"
  postToPage()
}




}
