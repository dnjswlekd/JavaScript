function walk() {
  console.log('walk');
}

function run() {
  console.log('run');
}

let move = run;

move();
run();
