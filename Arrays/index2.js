const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, 2);

console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invaild offset');
    return;
  }

  let output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(offset, 0, element);
  return output;
}
