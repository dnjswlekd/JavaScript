// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks){
  const average = calculateAverage(marks)
  if ( average < 60) return 'F';
  if ( average < 70) return 'D';
  if ( average < 80) return 'C';
  if ( average < 90) return 'B';
  return 'A';
}

function calculateAverage(array){
  let sum = 0;

  for (let value of array){
    sum += value;
  }
  return sum / array.length;
}
