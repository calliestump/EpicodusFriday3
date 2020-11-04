// Creates array length based on user input
function createUserInputArray(userNum) {
  console.log(userNum)
  userArray = [];
  let main = 0;
  for(let i=0; i<=userNum; i++) {
    userArray.push("");
    userArray[i] = main++ ;
  } 
  return userArray;
}
// Detects index's equal to numbers and replaces them with equalized word.
function replace(userArray) {
  let userNum = parseInt($("input#userNumber").val());
  let numbers = [3,2,1];
  let word = ["Won't you be my neighbor?", "Boop", "Beep"];
  for(let i=0; i<userArray.length; i++) {
    if (userArray[i] == numbers[0]) {
      userArray[i] = word[0];
    } else if (userArray[i] == numbers[1]) {
      userArray[i] = word[1];
    } else if (userArray[i] == numbers[2]) {
      userArray[i] = word[2];
    } else if (userArray[i] == 3) {
      userArray[i] = word[2];
    }
  } 
  return userArray;
}
function weigh(userArray) {
  let userNum = parseInt($("input#userNumber").val());
  let word = ["Won't you be my neighbor?", "Boop", "Beep"];
  for(let i=0; i<userArray.length; i++) {
    if (userNum == 32) {
      userArray = word[0];
    } else if (userNum == 21) {
      userArray = word[1];
    } else if (userNum == 13) {
      userArray = word[0];
    } else if (userArray[i] == 13) {
      userArray[i] == word[2];
    } 
    userArray = userArray.toString();
    userArray.push(userArray.charAt(i));
    console.log(userArray);
  }
  return userArray;
}
$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    let userNum = parseInt($("input#userNumber").val());
    let numbers = [3,2,1];
    let word = ["Won't you be my neighbor?", "Boop", "Beep"];
    let userArray = createUserInputArray(userNum, numbers, word);
    //userArray = userArray.split("");
    //suserArray = userArray.split("");
    //userArray = userArray.join("");
    alert(userArray);
    console.log(userArray);
    //weigh(userNum, userArray);
    replace(userArray);
    $("p").text(userArray);

  });
});
