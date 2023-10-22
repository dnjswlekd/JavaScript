//If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'sliver' cusomer.

// function getRandom() {
//   console.log(parseInt(Math.random() * 200));
// }

// let customerPoints = getRandom();

// if (customerPoints > 100) {
//   console.log('gold');
// }

let points = 101;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);
