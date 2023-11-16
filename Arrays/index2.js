const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElement) {
  for (let num of array) {
    if (num === searchElement) {
      return true;
    }
    return false;
  }
}
