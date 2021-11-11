const MenuItem = require("./MenuItem");

function Coffee(quantity) {
  const name = "coffee";
  const price = 80;
  const calories = 20;
  MenuItem.call(this, name, price, calories, quantity);
}

Object.setPrototypeOf(Coffee.prototype, MenuItem.prototype);

module.exports = Coffee;