// for
// while
// do-while
// 위 루프를 통해 동작을 여러 번 반복할 수 있다.

// 객체의 속성이나 요소의 배열을 반복하는 루프가 더 있다.

// Dot Notation
person.name

// Bracket Notation
person['name']



//for-in
const person = {
  name: 'Mosh',
  age: 30
};

// for (initialExpresssion; CSSConditionRule; increment)
for (let key in person)
console.log(key, person[key])
// in은 객체의 속성을 반복

const colors = ['red', 'green', 'blue'];

for (let index in colors)
console.log(index, colors[index]);

// for-of
for (let color of colors)
console.log(color)
// 배열의 요소나 항목을 반복
