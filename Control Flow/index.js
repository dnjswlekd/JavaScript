// let i  = 0;
// while (i <= 10) {
//   if ( i === 5 ) break;
//   if ( i % 2 === 0 ) {
//     i++;
//     continue;
//   }
//   console.log(i);
//   i++;
// }

// try first

function maximum(x, y){
  console.log(1 + 2);
}

maximum();

// try second

function maximumNum(x, y){
  return x + y;
}

let number = maximumNum(5, 10);

console.log(number)

// try third

function plus(n1, n2){
  return n1 + n2;
}

let mergeNumber = plus(10, 20)

console.log(mergeNumber)

// lecture answer

let number1 = max(90,90)
console.log(number1);

function max (num1, num2) {
  // if ( num1 > num2 ){
  //   return num1;
  // }
  // // } else return num2;
  // return num2;

  return (num1 > num2) ? num1 : num2;
}
