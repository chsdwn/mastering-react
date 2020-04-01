import Teacher from "./teacher";

const teacher = new Teacher("Ali", "PhD");
console.log(teacher.name);
console.log(teacher.degree);
teacher.walk();
teacher.teach();
