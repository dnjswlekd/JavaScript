//initialExpression, condition, incrementExpression
// for (let i = 1; i <= 5; i++) {
//   console.log('Hello', i)
// }
for (let i = 5; i >= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
