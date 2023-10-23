// Infinite Loops

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

do{
  console.log(i);
  i++;
} while (i < 5)

for (let i = 0; i < 5;);

//i를 증가 or 감소 시키지 않으면 무한루프에 빠지게 되니 유념하고 피하기