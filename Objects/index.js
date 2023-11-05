let x = {
  value: 10
}
 x.value= 20;

 console.log(x.value)

let obj = {
  value: 10
};

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);