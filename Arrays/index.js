const numbers = [1, -1, 2, 3];

const items = numbers
  .filter((num) => num >= 0)
  .map((num) => ({ value: num }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);

console.log(items);
