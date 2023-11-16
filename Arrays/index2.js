const numbers = [1, 2, 3, 4];
// output = [2,3,4]

const output = except(numbers, [1]);

console.log(output);

function except(array, excluded) {
  let output = [];
  for (let arr of array) {
    if (!excluded.includes(arr)) {
      output.push(arr);
    }
  }
  return output;
}
