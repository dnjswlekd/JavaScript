// //If a customer has more than 100 points,
// // they are a 'gold' customer, otherwise,
// // they are a 'sliver' cusomer.

// // function getRandom() {
// //   console.log(parseInt(Math.random() * 200));
// // }

// // let customerPoints = getRandom();

// // if (customerPoints > 100) {
// //   console.log('gold');
// // }

// // let points = 101;
// // let type = points > 100 ? 'gold' : 'silver';

// // console.log(type);

// // Logical AND &&
// // Return TRUE if both operands are TRUE
// // 왼쪽 오른쪽 둘다 진실이여야만 진실
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);

// // example 대출승인을 위한 신청서 만들기

// // Logical OR ||
// // Returns TRUE if one of the operands is TRUE
// // 왼쪽이든 오른쪽이든 둘중에 하나라도 진실이 있다면 진실
// let highIncome = false;
// let goodCreditScore = false;

// // let eligibleForLoan = highIncome && goodCreditScore
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log('Eligible',eligibleForLoan);

// // Not (!)
// let applicationRefused = !eligibleForLoan;
// console.log('Application Refused', applicationRefused);

// falsy (false)
// undefined
// null
// 0
// ''
// NaN

let userColor = 'red';
let defalutColor = 'blue';
let currenColor = undefined || defalutColor;

console.log(currenColor);