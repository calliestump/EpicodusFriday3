// Creates array length based on user input
function createUserInputArray() {
  userArray = [];
  let main = 0;
  for(let i=0; i<userNum; i++) {
    userArray.push("");
    userArray[i] = main++ ;
  }
  userArray.push(main++); // adds last number to array
}
// Detects index's equal to numbers and replaces them with equalized word.
function replace() {
  for(let i=0; i<userNum; i++) {
    if (userArray[i] == numbers[0]) {
      userArray[i] = word[0];
    } else if (userArray[i] == numbers[1]) {
      userArray[i] = word[1];
    } else if (userArray[i] == numbers[2]) {
      userArray[i] = word[2];
    }
  }
}
function weigh() {
  for(let i=0; i<userNum; i++) {
    if (userNum == 32) {
      userArray = word[0];
    } else if (userNum == 21) {
      userArray = word[1];
    } else if (userNum == 13) {
      userArray = word[0];
    }
  }

}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    userNum = parseInt($("input#userNumber").val());
    numbers = [3,2,1];
    word = ["Won't you be my neighbor?", "Boop", "Beep"];
    createUserInputArray();
    weigh()
    replace();
    $("p").text(userArray);
  });
});
