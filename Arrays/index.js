const first = [1, 2, 3];
const second = [4, 5, 6];

const combine = first.concat(second);
console.log(combine);

const slice = combine.slice(2, 4);
console.log(slice);

const merge = [...first, ...second];
console.log(merge);
