function sum() {
  let total = 0;
  console.log(arguments);

  for (num of arguments) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
