const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// SLICE Method
// console.log(movements.slice());

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

// const dogs = [5, 2, 4, 1, 15, 8, 3];
// const human = [];

// const calcAverageHumanAge = function (ages) {
//     const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
//     console.log(humanAges);
//     const adults = humanAges.filter(age => age >= 18);
//     console.log(adults);
// }
// // calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const calcAverageHumanAge2 = (ages) => {
//     const humanAge2 = ages
//     .map((age) => age <= 2 ? 2 * age : 16 + age * 4)
//     .filter((age) => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age/ arr.length, 0)
//     console.log(humanAge2)
// }
// calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);

// const euroToUsd = 1.1;

// const totalDepositsInUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, mov) => acc + mov, 0);
// // console.log(totalDepositsInUSD);

// const total = movements
// // console.log(total);

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const print = array
//     .filter((current) => {return current % 2 === 0})
//     .map((current, i, arr) => {return current * 2})
//     .reduce((current, mov) => current + mov, 0);
// // console.log(print);

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov)
//     return acc;
//   else
//     return mov;
// },movements[0]);
// // console.log(max);

// const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const filterMethod = movements2.find((mov) => mov < 0);
// // console.log(filterMethod);

// console.log(accounts);
// const account = accounts.find((acc) => acc.owner == "Jessica Davis");
// console.log(account);

// let accountTest;
// for(const acc of accounts){
//   if (acc.owner === "Jessica Davis") {
//     accountTest = acc;
//     break;
//   }
// }
// console.log(accountTest);

// for (let i = 0; i < accounts.length; i++) {
//   if (accounts[i].owner === "Jessica Davis") {
//     console.log(accounts[i].pin);
//     break;
//   }
// }

// // const lastWithdrawal = movements.findLast((mov) => mov < 0);
// // console.log(lastWithdrawal);

// const latestLargeMovementIndex = movements.findLastIndex((mov) =>
//     Math.abs(mov) > 2000
// )
// console.log(latestLargeMovementIndex);
// console.log(`Your Latest largest movement was ${movements.length - latestLargeMovementIndex - 1 } movements ago`);

// console.log(movements);

//Equality
// console.log(movements.includes(-130));

// //Condition
// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits);

// Every checks condition for each element in a array
// console.log(account4.movements.every(mov => mov > 0));

// //Removes 1 level of Nested Loop
// const arr = [[1,2,3], [4,5,6], 7,8];
// console.log(arr.flat());

// // Removes desired level of Nested Loop
// const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// // console.log(accountMovements);

// const allMovements = accountMovements.flat();

// console.log(allMovements);
// const totalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(totalBalance);

// const allMovements2 = accounts
// .map(acc => acc.movements)
// .flat()
// .reduce((acc, mov) => acc + mov, 0);

// console.log(allMovements2);

// //FlatMap
// const allMovements3 = accounts
// .flatMap(acc => acc.movements)
// .reduce((acc, mov) => acc + mov, 0);

// console.log(allMovements3);

// Challenge #4-----------------------------------------------------------------------------------------------------------------------------------------------
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

// //  1
// const huskyWeight = breeds.find(i => i.breed === 'Husky').averageWeight;
// // console.log(huskyWeight);

// //  2
// const dogBothActivities = breeds.find(
//   i => i.activities.includes('fetch') && i.activities.includes('running')
// ).breed;
// // console.log(dogBothActivities);

// //  3
// const allActivities = breeds.flatMap(breed => breed.activities);
// // console.log(allActivities);

// //  4
// const uniqueActivities = [...new Set(allActivities)];
// // console.log(uniqueActivities);

// //  5
// const swimmingAdjacent = [
//   ...new Set(
//     breeds
//       .filter(mov => mov.activities.includes('swimming'))
//       .flatMap(mov => mov.activities)
//       .filter(mov => mov !== 'swimming')
//   ),
// ];
// // console.log(swimmingAdjacent);

// //  6
// // console.log(breeds.every(breed => breed.averageWeight > 10));

// //  7
// // console.log(breeds.some(breed => breed.activities.length >= 3));

// //  8
// const heaviest = breeds
// .filter((mov) => mov.activities.includes('fetch'))
// .map((mov) => mov.averageWeight)

// const heaviestBreed = Math.max(...heaviest)

// // console.log(heaviest);
// console.log(heaviestBreed);

// //  Sorting Ascending
// console.log(movements.sort((a,b) => b - a));
// // Sorting Descending Order
// console.log(movements.sort((a,b) => a - b));

// console.log(movements);
// const groupedMovements = Object.groupBy(
//     movements,
//     (movement) => movement > 0 ? 'deposits' : 'withdrawal'
// );
// console.log(groupedMovements);


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const arr = new Array(1,2,3,4,5,6,7);
// console.log(...arr);

// console.log(...arr.fill( 0, 2, 6));

const y = Array.from({length: 7}, ()=> 1);
// console.log(...y);

const z = Array.from ({length: 7}, (_, i)=> i + 1)
// console.log(...z);

const a = Array.from ({length: 5}, (_, i) => Math.trunc(Math.random() * 10)+ 1)
// console.log(a);

// const movementsUI = Array.from(document.querySelector('.movements__value'))

// console.log(movementsUI);

