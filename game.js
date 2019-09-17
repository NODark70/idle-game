var score = 0;

postToPage(score); // Print to the page

createButton('Kofi', btnPress); // Make a button
changeTitle('Clicker Game');
createButton('bam', btnPress); // Make a button
changeTitle('Clicker Game');

setInterval(btnPress, 1000);

function btnPress() {
  score--;
  postToPage(score);






}
