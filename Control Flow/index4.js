// showStarts(5);

// function showStarts(stars) {
//   for (let star = 5; star < stars; star++) {
//     let pattern = '';
//     for (let i = 0; i > star; i++) {
//       pattern += '*';
//     }
//     console.log(pattern);
//   }
// }

showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
      }
    }
    if (isPrime) console.log(number);
  }
}
