//initialExpression, condition, incrementExpression
// for (let i = 1; i <= 5; i++) {
//   console.log('Hello', i)
// }
// for (let i = 5; i >= 1; i--) {
//   if (i % 2 !== 0) console.log(i);
// }

// while
// let i = 0;
// while (i <= 5) {
//   if (i % 2 !== 0) console.log(i);
//   i++;
// }

// do-while : while안에 있는 조건문이 거짓이더라도 do는 무조건 실행되어짐
// 쉽게 말해 표현하고 싶은걸 표현 후 조건문을 돌림
let i = 9;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);
