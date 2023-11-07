let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
// numbers = [];

// console.log(another);
// 기존 메모리가 있으니까 another에 numbers의 배열 그대로 존재
// console.log(numbers);
// 이전 numbers의 배열은 메모리에 그대로 있음

// // Solution 2
// numbers.length = 0;
// console.log(numbers);
// // 새로 배열을 지정해준게 아니라 기존의 numbers의 배열의 길이를 0으로 한것

// // Solution3
// numbers.splice(0, numbers.length);

// console.log(numbers);

// Solution 4
// while (numbers.length > 0) {
//   numbers.pop();
// }
// // 배열에 요소가 남아있지 않을 때 까지 pop마지막요소 지움
// console.log(numbers);
