"use strict"
const Order = require("./Order");
const Hamburger = require("./Hamburger");
const Coffee = require("./Coffee");
const Coke = require("./Coke");
const Caesar = require("./Caesar");
const Olivie = require("./Olivie");

//creating some instances: * for optional arguments

//new Hamburger(size*, stuffing*, quantity*) 
const hamburgerBig = new Hamburger();
const hamburgerSmall = new Hamburger(Hamburger.sizes.small, Hamburger.stuffings.potato);

//new Coffee(quantity*) 
const coffee = new Coffee();

//new Coke(quantity*)
const coke = new Coke();

//new Caesar(quantity*, grams*)
const caesar = new Caesar();

//new Olivie(quantity*,grams*)
const olivie = new Olivie();

//new Order(itemsArr*)
const order = new Order();


//My example
console.log("/1: coke added");
order.add(coke);
console.log(order.items);
console.log(order.price);

console.log("/2: hamburger and caesar added");
order.add(hamburgerBig);
order.add(caesar);
console.log(order.items);
console.log(order.price);

console.log("/3: coke removed");
order.delete(coke);
console.log(order.items);
console.log(order.price);

console.log("/4: coffee added, order paid");
order.add(coffee);
order.pay();
console.log(order.items);
console.log(order.price);

console.log("/5: trying to add small hamburger after payment");
order.add(hamburgerSmall);
console.log(order.items);
console.log(order.price);