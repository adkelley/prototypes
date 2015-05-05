function cardDeck() {
  this.cards = new Array(52);
}

cardDeck.prototype.initCards = function() {
  for (var i=0; i<52; i++) {
    this.cards[i] = i;
  }
}

cardDeck.prototype.deal = function() {
  var cardNum = Math.floor(Math.random() * 52);
  if (this.cards[cardNum] === cardNum) {
    this.cards[cardNum] = 0;
    return cardNum;
  }
  else 
    return 0;
}
  

cardDeck.prototype.isFull = function() {
  var isFull = true;
  var i = 0;
  do {
    isFull = (this.cards[i] === i);
    i += 1;
  } while (isFull && i < 52);
  return isFull;
}

cardDeck.prototype.cut = function() {
  var splitDeck = [];
  var cutIndex = Math.floor(Math.random() * 52);
  if (cutIndex === 0 || cutIndex === 52)
    return this.cards;
  else {
    splitDeck[0] = this.cards.slice(0, cutIndex);
    splitDeck[1] = this.cards.slice(cutIndex, 52);
  }
  return splitDeck;
}
  
