const person = {
  name: "Ali",
  walk: function() {},
  talk() {}
};
console.log(person.name);

person.talk();
person.name = "";
console.log(person.name);

const targetMember = "name";
person[targetMember] = "Veli";
console.log(person.name);
