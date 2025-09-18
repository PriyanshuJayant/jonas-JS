// class PersonCl{
//     constructor(fullName, birthYear){
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     // Methods will be added to .prototype property
//     calcAge(){
//         console.log(2025 - this.birthYear);
//     }
//     greeting(){
//         console.log(`Hey ${this.firstName}`);
//     }
//     get age(){
//         return 2025 - this.birthYear;
//     }
//     //  Set a Property that already exists
//     set fullName(name){
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`)
//     }
//     get fullName(){
//         return this._fullName;
//     }
//     //  Static Method
//     static hey(){
//         return this._fullName;
//     }
// }

// const jessica = new PersonCl('Jessica Davis', 2004);
// jessica.calcAge()
// jessica.greeting()
// console.log(jessica.age)

// const account = {
//     owner: 'jonas',
//     movements: [200, 500, 300, 120],
//     get latest(){
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov){
//         this.movements.push(mov);
//     }
// };
// // console.log(account.latest);
// account.latest = 50;
// console.log(account.movements)
// const walter = new PersonCl('Walter White', 1965);

// PersonCl.hey = function(){
//     console.log('Hey there ');
//     console.log(this);
    
// }

// const PersonProto = {
//     calcAge(){
//         console.log(2025 - this.birthYear);
//     },
//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };


// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2000;
// steven.gender = 'Gay Nigga'
// console.log(steven);

// const sara = Object.create(PersonProto);
// sara.init('Sara', 1979)
// sara.calcAge();