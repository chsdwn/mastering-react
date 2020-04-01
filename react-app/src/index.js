const person = {
  name: "Ali",
  walk() {
    console.log(this);
  }
};

person.walk(); // person

const walk = person.walk.bind(person);
walk(); // person
