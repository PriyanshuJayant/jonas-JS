let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['i', 'j', 'k', 'l', 'm'];

// SLICE Method
// console.log(arr.slice());

// SPLICE Method
// console.log(arr.splice(-2));
// console.log(arr);

// REVERSE Method 
// console.log(arr.reverse());
// console.log(arr);

// CONCAT 
// const letter = arr.concat(arr2);
// console.log(letter);

// console.log([...arr,...arr2]);

// JOIN 
// console.log(letter.join(' + '));

// const arr = [23, 11, 64];
// console.log(arr.at(0));
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('Nigga'.slice(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You Deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You Deposited ${movement}`);    
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// })

const julia = [3, 5, 2, 12, 7];
const kate = [4, 1, 15, 8, 3];

// const juliaUpdated = julia.slice(0, 3);
// // console.log(juliaUpdated);


// const all = [...juliaUpdated, ...kate];
// // console.log(all);

// for (let i = 0; i < all.length; i++) {
//     if (all[i] > 3) {
//         console.log(`DOG number ${i} is Adult`);
//     } else {
//         console.log(`DOG number ${i} is a pup py 🐶`);
//     }
// }

// const checkDogs = function(dogsJulia, dogsKate){
//     const dogsJuliaCorrected = dogsJulia.slice();
//     dogsJuliaCorrected.splice(0,1);
//     dogsJuliaCorrected.splice(-2);
//     const dogs = dogsJuliaCorrected.concat(dogsKate);

//     dogs.forEach(function(dog, i){
//         if (dog >= 3) {
//             console.log(`DOG number ${i + 1} is Adult, and is ${dog} years old`);
//         }else{
//             console.log(`DOG number ${i} is a puppy 🐶`);
//         }
//     })
// }
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euro = 1.1;

// const movementsUsd = movements.map(mov => mov * euro);

// // console.log(movements);
// // console.log(movementsUsd);

// const movementsUsdCopy = [];
// for (const mov of movements) {
//     movementsUsdCopy.push(mov * euro)
// }
// console.log(movementsUsdCopy);

// const movementDescriptions = movements.map((mov, i, arr) => {
//     if (mov > 0) {
//         return (`Movement ${i + 1}: You ${mov > 0 ? 'Deposited' : 'Withdrew'} ${mov}`);
//     } else {
//         return (`You withdrew ${Math.abs(mov)}`);
//     }
// });
// console.log(movementDescriptions);


// const deposits = movements.filter(function (mov) {
//   return mov > 0
// })
// // console.log(deposits);

// console.log(movements);

// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);

//   return cur + acc
// },0);
// console.log(balance);

const dogs = [5, 2, 4, 1, 15, 8, 3];
const human = [];

const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
    console.log(humanAges);
    const adults = humanAges.filter(age => age >= 18);
    console.log(adults);

}
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const euroToUsd = 1.1;

const totalDepositsInUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsInUSD);

const total = movements
console.log(total);
