// speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> license suspended

// checkSpeed(72);

// My code
// function checkSpeed(speed) {
//   if (speed > 0 || speed <= 70) {
//     console.log('OK');
//   } else if (speed >= 75) {
//     let num = 0;
//     for(i=5; i< speed; i++;) {
//       Math.floor(num);
//     }
//     console.log('Point :' num)
//   } else if (speed >= 180) {
//     console.log('license suspended');
//   }
// }

checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log('OK');
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    console.log('license suspended');
  } else {
    console.log('Points:', points);
  }
}
