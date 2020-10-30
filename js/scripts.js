// Compare the index's of the two arrays and assign a result based on user input.
function compare() {
  result = "";
  for(let i=0; i<userArray.length; i++) {
    if (userNum === 3) {
      result = word[0];
    } else if (userNum === 2) {
      result = word[1];
    } else if (userNum === 1) {
      result = word[2];  
    } 
  }
}
// Creates array length based on user input
function createUserInputArray() {
  userArray = [];
  main = 0;
  for(let i=0; i<userNum; i++) {
    userArray.push("");
    userArray[i] = main++ ;
  }
}
// Detects index's equal to numbers and replaces them with equalized word.
function replace() {
  if (userArray[i] == 3) {
    userArray[i] = word[0];
  } else if (userArray[i] == 2) {
    userArray[i] = word[1];
  } else if (userArray[i] == 1) {
    userArray[i] = word[2];
  }
}
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    userNum = parseInt($("input#userNumber").val());
    const numbers = [3,2,1];
    word = ["Won't you be my neighbor?", "Boop", "Beep"];
    createUserInputArray();
    compare();
    //replace();
    $("p").text(result);
  });
});
