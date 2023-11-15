const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let num of numbers) {
//   sum += num;
// }

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
