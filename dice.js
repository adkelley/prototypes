function Dice(numberOfSides) {
  this.numberOfSides = numberOfSides;
  this.lastRoll = 0;
}

Dice.prototype.roll = function() {
  var normalize = this.numberOfSides;
  return this.lastRoll =
    Math.floor(Math.random() * normalize + 1);
}

/*
var myDice = new Dice(8);
for (i=0; i<50; i++) {
  console.log(myDice.roll());
};
*/
