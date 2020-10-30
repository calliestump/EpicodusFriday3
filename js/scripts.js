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
  for(let i=0; i<userNum; i++) {
    userArray.push("");
  }
}
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    userNum = parseInt($("input#userNumber").val());
    numbers = [3,2,1];
    word = ["Won't you be my neighbor?", "Boop", "Beep"];
    createUserInputArray();
    compare();
    $("p").text(result);
  });
});
