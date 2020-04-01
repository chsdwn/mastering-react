const colors = ["red", "green", "blue"];

const items = colors.map(function(color) {
  return "<li>" + color + "</li>";
});

const itemsAF = colors.map(color => `<li>${color}</li>`);
console.log(items);
console.log(itemsAF);
