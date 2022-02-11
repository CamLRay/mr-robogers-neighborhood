//Business Logic
function numberGenerator(num){
  let numArray = [];
  for (let i = 0; i <= num; i++) {
  numArray.push(parseInt(i));
  }
  return numArray
}

function numReplace(numArray,name){
  let beep = numArray.map(function(num){
    if (num.toString().includes(1) && !num.toString().includes(2) && !num.toString().includes(3) ) {
      return "Beep!";
    } else if (num.toString().includes(2) && !num.toString().includes(3)) {
      return "Boop!";
    } else if (num.toString().includes(3) && name === "") {
      return "Won't you be my neighbor?"
    } else if (num.toString().includes(3) && name !== "") {
      return "Won't you be my neighbor, " + name + "?"
    }
    return num;
  });
  return beep
}



//UI Logic

$(document).ready(function(){
  $("form#formOne").submit(function(e){
    e.preventDefault();
    const num = parseInt($("#userNum").val());
    const name = $("#userName").val().trim();
    let result = numReplace(numberGenerator(num),name).join(" ");
    if (!isNaN(num)) {
      $("#output").text("Mr. Roboger sings: " + result + ".");
    } else {
      $("#output").text("Mr. Roboger says: Error neighbor, please enter a numerical number!");
    }
  });

});