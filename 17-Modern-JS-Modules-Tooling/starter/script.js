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

import add, { cart } from './shoppingCart.js'
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

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    // console.log(data);
    return { title: data.at(-1).title, text: data.at(-1).body };
}
const lastPost = getLastPost();
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

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(...ShoppingCart2.cart);
console.log(ShoppingCart2);


