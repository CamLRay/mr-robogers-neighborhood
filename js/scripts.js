function numberGenerator(num){
  let numArray = [];
  for (let i = 0; i <= num; i++) {
  numArray.push(parseInt(i));
  }
  return numArray
}

function numOneReplace(numArray){
let beep = numArray.map(function(num, index){
  if (num === 1) {
  return "beep!";
  }
  return num;
});
return beep
}

console.log(numOneReplace(numberGenerator(3)));