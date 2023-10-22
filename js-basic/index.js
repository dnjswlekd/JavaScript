//This is my first JavaScript code!
// console.log('hello world')


// variables 변수
let name1 = 'wonji';
console.log(name1);

// Cannot be a reserved keyword :키워드로 지정될 수 없다.
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hypen (-)
// Are case - sensitive

let firstName = 'wonji';
let lastName = 'Park';



// constants 상수
const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate)

// Primitive Types 기초적인, 원시적인 유형
let name2 = 'wonji'; //String literal
let age= 25; // Number literal
let inApproved = false; // Boolean literal
let SecondName = undefined;
let selectedColor = null

// Objects 객체
let person = {
  name: 'wonji',
  age: '25'
}

// Dot Notation
person.name= 'sahoon'

// Braket Notation
person['name'] = 'sahoon wonji'

console.log(person.name)

//Arrays
let selectedColors = ['red', 'green']
selectedColors[2] = 'blue'

console.log(selectedColors[2])
console.log(selectedColors.length)

//Functions

function greet(name, lastName){
  console.log('Hello Wolrd ' + name + ' ' + lastName)
}

greet('Wonji', 'Park');