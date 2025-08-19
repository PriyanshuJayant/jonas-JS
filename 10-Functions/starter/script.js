// 'use strict';

// const poll = {
//     question:   'What is your favorite programming language? ',
//     options: ['0. JavaScript', '1. Python','2. Rust', '3. C++'],
//     answers: new Array(4).fill(0),

//     registerNewAnswer(){
//         //Get Answer
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')} (Write Option Number)`));

//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
//         this.displayResult();
//         this.displayResult('string');
//     },
//     displayResult(type = 'array'){
//         if (type === 'array') {
//             console.log(this.answers);
//         }else if (type === 'string') {
//             console.log(`Poll Results are: ${this.answers.join(', ')}`); 
//         }
//     }
// }
// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


// const secureBooking = function (){
//     let passengerCount = 0;

//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const book = secureBooking();

// book();
// book();
// book();



// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     }
// }

// const h = function(){
//     const b = 777;
//     f = function (){
//         console.log(b * 2);
//     }
// }
// g();
// f();
// console.dir(f);

// h();
// f();
// console.dir(f);


// const boardPassengers = function(n, wait){
//     const perGroup = n / 3;

//     setTimeout( function(){
//         console.log(`We are now Boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     },wait * 1000)

//     console.log(`Will Start Boarding in ${wait} seconds`);

// };

// boardPassengers(1800, 3 )

(function (){
    const header = document.querySelector('h1');
    header.style.color = 'red';

    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    })
})();

