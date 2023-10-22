//Hour
// If Hour is between 6am and 12pm: Good morning!
// If it is between 12am and 6pm: Good afternoon!
// Otherwise: Good evening!

let Hour = 10;

if (Hour >= 6 && Hour < 12) {
  console.log('Good morning!');
} else if (Hour >= 12 && Hour < 18) {
  console.log('Good afternoon!');
} else console.log('Good evening!');
