const Order = require("./Order");
const MenuItem = require("./MenuItem");

function Hamburger(size = Hamburger.sizes.big, stuffing = Hamburger.stuffings.cheese, quantity) {
  const name = `${size.name} hamburger with ${stuffing.name}`;
  Order.call(this, [size, stuffing]);
  this.lock();
  const price = Number.parseInt(this.price);
  const calories = Number.parseInt(this.calories);
  MenuItem.call(this, name, price, calories, quantity);
}

Object.setPrototypeOf(Hamburger.prototype, Order.prototype);

Hamburger.sizes = {
  big: new MenuItem("big", 100, 40),
  small: new MenuItem("small", 50, 20)
};

Hamburger.stuffings = {
  cheese: new MenuItem("cheese", 10, 20),
  salad: new MenuItem("salad", 20, 5),
  potato: new MenuItem("potato", 15, 10)
};

module.exports = Hamburger;