function Order(itemsArr = []) {
  this._items = itemsArr;
  this._isLocked = false;
}

Order.lockedMessage = "Order is locked";

Object.defineProperty(Order.prototype, "price", {
  get: function () {
    const price = this._items.reduce(
      (a, u) => a + Number.parseInt(u.price, 10),
      0
    );
    return `${price} ${price === 1 ? "tugric" : "tugrics"}`;
  }
});

Object.defineProperty(Order.prototype, "calories", {
  get: function () {
    const calories = this._items.reduce(
      (a, u) => a + Number.parseInt(u.calories, 10),
      0
    );
    return `${calories} ${calories === 1 ? "cal" : "cals"}`;
  }
});

Object.defineProperty(Order.prototype, "items", {
  get: function () {
    return this._items;
  }
});

Object.defineProperty(Order.prototype, "isLocked", {
  get: function () {
    return this._isLocked;
  }
});

Object.defineProperties(Order.prototype, {
  add: {
    value: function (item) {
      if (this._isLocked) return Order.lockedMessage;
      if (this._items.includes(item)) return "This item is already in order";
      this._items.push(item);
    }
  },
  delete: {
    value: function (item) {
      if (this._isLocked) return Order.lockedMessage;
      const index = this._items.indexOf(item);
      if (~index) {
        this._items.splice(index, 1);
        return "item succesfully removed";
      } else {
        return "Item not found";
      }
    }
  },
  unlock: {
    value: function () {
      this._isLocked = false;
    }
  },
  lock: {
    value: function () {
      this._isLocked = true;
    }
  },
  pay: {
    value: function () {
      if (this._isLocked) return Order.lockedMessage;
      this.lock();
      return "Payment confirmed";
    }
  }
});

module.exports = Order;