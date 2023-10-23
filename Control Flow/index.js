// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not Divisible by 3 or 5 => input
// Not a number => 'Not a number'

// My answer
// function fizzBuzz(input) {
//   if(input % 3 === 0 ){
//     return 'Fizz'
//   } else if ( input % 5 === 0 ) {
//     return 'Buzz'
//   } else if ( input === parseInt(input) ){
//     return input;
//   } else return 'Not a number'
// }

const output = fizzBuzz(8);
console.log(output);

// lecture answer
function fizzBuzz(input) {
  if (typeof input != 'number') return NaN;
  
  if (input % 3 === 0 && input % 5 === 0) return 'FizzBuzz';

  if (input % 3 === 0) return 'Fizz';

  if (input % 5 === 0) return 'Buzz';


  return input;
}
