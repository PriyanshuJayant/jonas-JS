// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUS (){
//     return this.speed / 1.6;
//   }
//   set speedUS(speed){
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('Ford',120)
// console.log(ford.speedUS)
// ford.accelerate();
// ford.accelerate();
// ford.speedUS = 50;
// console.log(ford);

// const Person = function(firstName, birthYear){
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }
// Person.prototype.calcAge = function() {
//   console.log(2025 - this.birthYear);
// }
// const Student = function(firstName, birthYear, course){
//   Person.call(this, firstName, birthYear);
//   this.course = course;

// }
// //  LInking Prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function(){
//   console.log(`My name us ${this.firstName}, i study ${this.course}`);
// }
// const mike = new Student('Mike', 2020, "CS");
// console.log(mike);
// mike.introduce();
// mike.calcAge();
// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going art ${this.speed} km/h`);
// };

// const EV = function (make, speed, charge) {``
//   Car.call(this, make, speed);
//   this.speed = speed;
//   this.charge = charge;
// };

// // Link Prototype
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(`${this.make} is going art ${this.speed} km/h, with a charge of ${this.charge}`);
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();

// const PersonProto = {
//     calcAge() {
//         console.log(2025 - this.birthYear);
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     },
// };

// const steven = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//     PersonProto.init.call(this, firstName, birthYear);
//     this.course = course;
// }
// StudentProto.introduce = function () {
//     console.log(`My Name is ${this.fullName} and i study ${this.course}`);
// }
// const jay = Object.create(StudentProto);
// jay.init('jay', 2000, 'Computer Science');
// jay.introduce();
// jay.calcAge();

class Account {
  locale = navigator.language;
  bank = 'Bankist';

  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this.locale = navigator.language;
  }

  //  Public interface (API)
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  #approveLoan(vla) {
    return true;
  }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan Approved');
    }
    return this;
  }
  static test() {
    console.log('TEST');
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
// acc1.deposit(250);
// acc1.withdraw(140);
const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();

console.log(acc1);
console.log(movements);
