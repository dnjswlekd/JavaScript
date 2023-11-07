const numbers = [1, 2, 3, 4];

//End 마지막요소 제거
const last = numbers.pop();

//Beginning 첫번째요소 제거
const first = numbers.shift();
// [2,3]

// Middle
numbers.splice(0);

console.log(numbers);
