const numbers = [1, 2, 3, 4];

console.log(includes(numbers, -1));

function includes(array, searchElement) {
  for (let el of array) {
    if (el === searchElement) {
      return true;
    }
    return false;
  }
}
