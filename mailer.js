function Mailer(from) {
  this.from = from;
  this.currentMessage = {};
  this.sentMessages = [];
}

Mailer.prototype.setSendTo = function (addressee, message) {
  this.currentMessage.sendTo = addressee;
  this.currentMessage.message = message;
}

Mailer.prototype.setSubject = function (subject) {
  this.currentMessage.subject = subject;
}

Mailer.prototype.send = function () {
  this.currentMessage.from = this.from;
  if (this.currentMessage.sendTo && this.currentMessage.subject) {
    this.sentMessages.push(this.currentMessage);
    this.currentMessage = {};
  }
}

  
