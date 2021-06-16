/*var colors = ["yellow", "red", "blue", "orange"];
var i = 0;
var text = "";

while (colors[i]) {
    text += colors[i] + "<br>";
    i++;
}

console.log(text); 

var colors = ["yellow", "red", "blue", "orange"];
var i = 0;
var text = "";

for (i = 0; i < colors.length; i++) {
    text += colors[i] + "<br>";
  }

  console.log(text); */

  var colors = ["yellow", "red", "blue", "orange"];

  colors.forEach((color) => console.log(color));

  //for loop is 3 regels, een while loop is 5 regels en een forEach is 1 regel.
  //het is korter en overzichtelijker, zorgt dat je minder snel fouten maakt en je kan niet in een infinate loop raken
  // looping through the properties of an object: 
  // je bent aan het iterateren. 