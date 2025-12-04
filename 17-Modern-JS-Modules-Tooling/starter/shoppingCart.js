//   Exporting module
// console.log('Exporting Module');

// Blocking COde
// console.log('Start Fetching Users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish Fetching');


const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to Cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to Cart`);
}
