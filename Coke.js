const MenuItem = require("./MenuItem");

function Coke(quantity = 1) {
  const name = "coke";
  const price = 50;
  const calories = 40;
  MenuItem.call(this, name, price, calories, quantity);
}

Object.setPrototypeOf(Coke.prototype, MenuItem.prototype);

module.exports = Coke;