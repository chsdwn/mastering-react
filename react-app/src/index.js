// var => function
// let => block
// const => block

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log("hello i");
  }

  for (var j = 0; j < 5; j++) {
    console.log("hello j");
  }

  console.log(i);
  console.log(j);
}

sayHello();
