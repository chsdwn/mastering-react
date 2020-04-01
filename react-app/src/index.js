const person = {
  talk() {
    var self = this;
    setTimeout(function() {
      console.log("this", self);
    }, 1000);
  },
  talkAF() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

person.talk();
person.talkAF();
