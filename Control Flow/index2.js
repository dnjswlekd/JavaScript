const array = [ '', undefined, 1, 0, 3, 2];

console.log(countTruthy(array))

function countTruthy(array) {
  let count = 0;

  for ( let arr of array) {
    if ( arr ){
      count++;
    }
  }
  return count;
}