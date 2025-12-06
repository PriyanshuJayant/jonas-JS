// Importing Module
// import './shoppingCart.js';
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// addToCart('bread', 5);0
// console.log(price, qt);

// console.log(ShoppingCart);

// console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js' // Imports entire module as an object
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { cart } from './shoppingCart.js'
// add('pizza', 2);
// add('apple', 3);
// add('bread', 4);

// console.log(cart);

// console.log('start fetching');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// const rand = Math.trunc(Math.random() * data.length);
// console.log(rand);
// console.log(data[rand]);
// console.log('something');

// const getLastPost = async function () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await res.json();
//     // console.log(data);
//     return { title: data.at(-1).title, text: data.at(-1).body };
// }
// const lastPost = getLastPost();
// console.log(lastPost);

// Not very clean way
// lastPost.then(last => console.log(last))

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

const ShoppingCart2 = (() => {
    const cart = [];
    const shoppingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} added to Cart`);
    }
    const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
        console.log(`${quantity} ${product} Ordered From Supplier`);
    }
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
})();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2);
// console.log(...ShoppingCart2.cart);
// console.log(ShoppingCart2);

// console.log('Module Pattern');

// CommonJS Modules
// ?Exported in Node.js environment by default
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to Cart`);
// }

// Import
const { addToCart } = require('./shoppingCart.js');

import cloneDeep from 'lodash-es';
const state = {
    cart: [
        { product: 'bread', quantity: 5 },
        { product: 'pizza', quantity: 3 }
    ],
    user: { loggedIn: true }
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

if (module.hot) {
    module.hot.accept();
}

class Person {
    #greeting = 'hey';
    constructor(name) {
        this.name = name;
        console.log(`${this.#greeting}, ${this.name}`);
    }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);
// console.log(cart.find(el => el.quantity >= 2));
// console.log(cart);
const arr = [1,2,3,4,5,6,7,8,10];
console.log(arr.find(el => el > 5));

Promise.resolve('TEST').then(x => console.log(x));

// import 'core-js/stable';
import 'core-js/stable/array/find';
// Polifilling Async Functions
import 'regenerator-runtime/runtime';