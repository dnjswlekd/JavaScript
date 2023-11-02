let radius = 1;
let x = 1;
let y = 1;
//객체의 키 값 쌍은 어떤 것도 될 수 있다. 함수, null, undefined 등
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  isVisible: true,
  draw: function() {
    console.log('draw');
  }
}
circle.draw();
// 객체 지향
// Object-oriented Programming (OOP)
// 기능을 수행하기 위해 서로 대화하는 개체들의 집합
// 함수가 객체의 일부인 경우 그 함수를 메서드라고 한다. 



// function draw() {}
// function move() {}
// 이런함수들로 밖에서 무언가를 만드는 것보다 이 함수를 위 객체 안에 넣으면 깔끔