let figure = isLandscape (1920, 720)
console.log(figure)

console.log(isLandscape(1920, 720))

function isLandscape (width, height) {
  // if (width > height){
  //   return true;
  // } return false;
  return (width > height);
}