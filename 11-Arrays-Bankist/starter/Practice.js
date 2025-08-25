//  1
const bankDepositSum = accounts
  .flatMap(mov => mov.movements)
  .filter(mov => mov > 0)
  .reduce((mov, i) => mov + i, 0);
console.log(bankDepositSum);

//  2
const numDeposits1000 = accounts
  .flatMap(mov => mov.movements)
  //   .filter(mov => mov >= 1000).length
  .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
console.log(numDeposits1000);

//  3   Sum of Deposits and Withdrawals
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, curr) => {
      //curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
        sums[curr > 0 ? 'deposits' : 'withdrawals'] += curr;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
// console.log(deposits, withdrawals);

//  4
const convertTitleCase = function(title){
    const capitalize = str => str[0].toUpperCase() + str.slice(1)

    const exceptions = ['a','an','the','but','or','on','in','with','and'];
    const titleCase = title
    .toLowerCase()
    .split(' ')
    .map((word) => exceptions.includes(word) ? word : capitalize(word))
    .join(' ')

    return capitalize(titleCase)
};

console.log(convertTitleCase('a this is a LONG title but not too long'));
