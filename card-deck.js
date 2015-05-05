function CardDeck() {
  this.cards = new Array(52);
}

CardDeck.prototype.initCards = function() {
  for (var i=0; i<52; i++) {
    this.cards[i] = i;
  }
}

CardDeck.prototype.deal = function() {
  var cardNum = Math.floor(Math.random() * 52);
  if (this.cards[cardNum] === cardNum) {
    this.cards[cardNum] = 0;
    return cardNum;
  }
  else 
    return 0;
}
  

CardDeck.prototype.isFull = function() {
  var isFull = true;
  var i = 0;
  do {
    isFull = (this.cards[i] === i);
    i += 1;
  } while (isFull && i < 52);
  return isFull;
}

CardDeck.prototype.cut = function() {
  var splitDeck = [];
  var cutIndex = Math.floor(Math.random() * 52);
  if (cutIndex === 0 || cutIndex === 52)
    return this.caOArds;
  else {
    splitDeck[0] = this.cards.slice(0, cutIndex);
    splitDeck[1] = this.cards.slice(cutIndex, 52);
  }
  return splitDeck;
}

CardDeck.prototype.shuffle = function() {
  var temp, rand, normalize;
  var n = this.cards.length;
  var nm1 = n - 1;
  
  for (var i=nm1; i>-1; i--) {
    rand = Math.floor(Math.random() * i);
    temp = this.cards[i];
    this.cards[i] = this.cards[rand];
    this.cards[rand] = temp;
  }
}




