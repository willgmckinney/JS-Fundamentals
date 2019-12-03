// Booleans or Bools

let i = true;

let j = false;

console.log(i, j)

// Null

let test = null

// undefined

let myName = undefined;
let othername;

// Number

let degrees = 90;

let precise = 999999999999999;
console.log(precise);
let overflowed = 9999999999999999;
console.log(overflowed);
let notQuite = (0.1 + 0.2).toFixed(2);
console.log(notQuite);

let numbersAreHard = (.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let numbers = Number('123');
console.log(numbers);

// Strings 

let stringOne= "Doubley bois";
let string2 = 'singley bois';

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first);
console.log(second);

console.log(typeof first, typeof second);

console.log(123 + '999');

// Objects
// Key value pairs seperated by a comma
let car1 = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true,
    '1something': 'lemons',
}

console.log(car1);
console.log(car1.tires);

car1.make = 'Ford';

console.log(car1.make);

car1['model'] = 'Bronco';
console.log(car1['model']);

console.log(car1['1something']);

// Arrays

let burritos = ['large', 4, true]
console.log(burritos)

console.log(burritos[1])

console.log(typeof burritos)

console.log(burritos instanceof Array)

console.log(burritos.length)

let a = 'hello'
let b = 'goodbye'
console.log(a+b)
console.log(a + " " + b)

let greet = "Hey"
let name = "Danielle"

// String interpilation

console.log(`${greet} ${name}!`)

// Challange

let Will = {
    firstName: "Will",
    lastName: " McKinney",
    houseNumber: 1031,
    aptNumber: "NA",
    street: " N Pennsylvania St",
    city: " Indianapolis",
    state: " Indiana",
    zipCode:" 46204",
}

let address = (Will.houseNumber + Will.street + Will.city + Will.state + Will.zipCode)

console.log(`Hello my name is ${Will.firstName} ${Will.lastName} I live at ${address}`)