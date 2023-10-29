// const array = [ '', undefined, 1, 0, 3, 2];

// console.log(countTruthy(array))

// function countTruthy(array) {
//   let count = 0;

//   for ( let arr of array) {
//     if ( arr ){
//       count++;
//     }
//   }
//   return count;
// }

const movie = {
  title: 'saehun',
  releaseYear: 1998,
  rating: 9.1,
  director: 'o',
};
showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      console.log(key, obj[key]);
    }
  }
}
