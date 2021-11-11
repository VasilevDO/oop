const MenuItem = require("./MenuItem");

function Salad(saladName, pricePer100g, caloriesPer100g, quantity, grams = Salad.pricePerGrams) {
  this._weight = grams;
  const price = (pricePer100g * this._weight) / Salad.pricePerGrams;
  const calories = (caloriesPer100g * this._weight) / Salad.pricePerGrams;
  const name = `${saladName} ${this._weight}g`;
  MenuItem.call(this, name, price, calories, quantity);
}

Salad.pricePerGrams = 100;

Object.setPrototypeOf(Salad.prototype, MenuItem.prototype);

Object.defineProperty(Salad.prototype, "weight", {
  get: function () {
    return `${this._weight}g`;
  }
});

module.exports = Salad;