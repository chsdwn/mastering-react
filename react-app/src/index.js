const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const combinedES6 = [...first, 3.5, ...second];
console.log(combinedES6);

const clone = [...first];
console.log(first);
console.log(clone);

const person1 = { name: "Ali" };
const person2 = { job: "Carpenter" };

const person = { ...person1, ...person2, location: "TR" };
console.log(person);
