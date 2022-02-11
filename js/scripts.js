function numberGenerator(num){
  let numArray = [];
  for (let i = 0; i <= num; i++) {
  numArray.push(parseInt(i));
  }
  return numArray
}

function numReplace(numArray){
let beep = numArray.map(function(num){
  if (num.toString().includes(1)) {
  return "beep!";
  }
  return num;
});
return beep
}

console.log(numOneReplace([1,3,11,15,100]));