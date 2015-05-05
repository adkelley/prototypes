function Radio(ownerName, signalType) {
  this.ownerName = ownerName;
  this.signalType = signalType;
  this.station = 0;
  this.music = "no music";
}

Radio.prototype.setStation = function (station) {
  var AMBand = [535, 1705];
  var FMBand = [88, 108];
  if (this.signalType === "AM") {
    if (station >= AMBand[0] && station <= AMBand[1])
      return this.station = station;
    else
      return this.station;
  } else {
    if (station >= FMBand[0] && station <= FMBand[1])
      return this.station = station;
    else
      return this.station;
  }
}

Radio.prototype.listen = function () {
  if (this.signalType === "AM")
    return this.music = "distorted music";
  else
    return this.music = "clear music";
}
