const coures = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

const course = coures.find((coures) => coures.name === 'a');
// const course = coures.findIndex((coures) => coures.name === 'a');

const course2 = coures.find(function (course) {
  return course.name === 'a';
});

console.log(course);
console.log(course2);
