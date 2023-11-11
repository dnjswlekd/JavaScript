const first = [1, 2, 3];
const second = [4, 5, 6];

const combine = first.concat(second);
console.log(combine);

const slice = combine.slice(2, 4);
console.log(slice);

const merge = [...first, 'a', ...second, 'b'];
console.log(merge);

const copy = [...combine];

console.log(copy);
