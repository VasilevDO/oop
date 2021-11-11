function MenuItem(name, pricePerItem, caloriesPerItem, quantity = 1) {
  this._name = name;
  this._pricePerItem = pricePerItem;
  this._caloriesPerItem = caloriesPerItem;
  this._quantity = quantity;
}

Object.defineProperty(MenuItem.prototype, "price", {
  get: function () {
    const price = this._pricePerItem * this._quantity;
    return `${price} ${price === 1 ? "tugric" : "tugrics"}`;
  }
});

Object.defineProperty(MenuItem.prototype, "calories", {
  get: function () {
    const calories = this._caloriesPerItem * this._quantity;
    return `${calories} ${calories === 1 ? "cal" : "cals"}`;
  }
});

Object.defineProperty(MenuItem.prototype, "name", {
  get: function () {
    return this._name;
  }
});

Object.defineProperty(MenuItem.prototype, "quantity", {
  get: function () {
    return this._quantity;
  }
});

module.exports = MenuItem;