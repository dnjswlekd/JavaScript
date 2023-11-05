const circle = {
  radius: 1,
  draw(){
    console.log('draw');
  }
}

const another = {};


for (let key in circle){
  another[key] = circle[key]
}
another['radius'] = circle['radius']

// 위와 동일한 코드
const another2 = Object.assign({
  color: 'wonji'
}, circle)

// 위와 동일한 코드 2
const another3 = {...circle}

console.log(another3)