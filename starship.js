function StarShip(model, ownerName) {
  this.model = model;
  this.ownerName = ownerName;
  this.topSpeed = 100;
  this.currentSpeed = 0;
}

StarShip.prototype.setTopSpeed = function(topSpeed) {
  return this.topSpeed = topSpeed;
}

StarShip.prototype.getTopSpeed = function() {
  return this.topSpeed;
}

StarShip.prototype.accelerateTo = function (gain) {
  if ((this.currentSpeed + gain) < this.topSpeed) {
    return this.currentSpeed += gain;
  }
  else return this.currentSpeed = this.topSpeed;
}
