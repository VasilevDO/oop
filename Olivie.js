const Salad = require("./Salad");

function Olivie(quantity, grams) {
  const name = "olivie";
  const pricePer100g = 50;
  const caloriesPer100g = 80;
  Salad.call(this, name, pricePer100g, caloriesPer100g, quantity, grams);
}

Object.setPrototypeOf(Olivie.prototype, Salad.prototype);

module.exports = Olivie;