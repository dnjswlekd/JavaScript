// function sum() {
//   let total = 0;
//   console.log(arguments);

//   for (num of arguments) {
//     total += num;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5));

function sum(discount, ...prices) {
  const total = prices.reduce((arr, cur) => arr + cur);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));
