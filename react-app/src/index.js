const person = {
  name: "Ali",
  walk() {
    console.log(this);
  }
};

person.walk(); // person

const walk = person.walk;
walk(); // Window
