function numberGenerator(num){
  let numArray = [];
  for (let i = 0; i <= num; i++) {
  numArray.push(parseInt(i));
  }
  return numArray
}

function numReplace(numArray){
let beep = numArray.map(function(num){
  if (num.toString().includes(1) && !num.toString().includes(2) && !num.toString().includes(3) ) {
    return "beep!";
  } else if (num.toString().includes(2) && !num.toString().includes(3)) {
    return "boop!";
  } else if (num.toString().includes(3)) {
    return "Won't you be my neighbor?"
  }
  return num;
});
return beep
}

console.log(numReplace([0,1,2,3,12]));