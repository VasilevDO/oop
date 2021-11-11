const Salad = require("./Salad");

function Caesar(quantity, grams) {
  const name = "caesar";
  const pricePer100g = 100;
  const caloriesPer100g = 20;
  Salad.call(this, name, pricePer100g, caloriesPer100g, quantity, grams);
}

Object.setPrototypeOf(Caesar.prototype, Salad.prototype);

module.exports = Caesar;