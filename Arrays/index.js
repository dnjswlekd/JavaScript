const first = [{ id: 1 }];
const second = [4, 5, 6];

const combine = first.concat(second);
console.log(combine);
first[0].id = 10;

const slice = combine.slice(2, 4);
console.log(slice);

const merge = [...first, ...second];
console.log(merge);
