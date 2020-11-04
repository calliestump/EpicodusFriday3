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

//Changes each three, two, and one integers to assigned string values.
function weigh(userArray,numbers) {
  let word = ["Won't you be my neighbor?", "Boop", "Beep"];
  for(let i=0; i<userArray.length; i++) {
    if ((userArray[i] + "").includes(numbers[0])) {
      userArray[i] = word[0];
    } else if ((userArray[i] + "").includes(numbers[1])) {
      userArray[i] = word[1];
    } else if ((userArray[i] + "").includes(numbers[2])) {
      userArray[i] = word[2];
    }  
  }
  return userArray;
}       

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
    event.preventDefault();
    $(".content-box").show();
    let userNum = parseInt($("input#userNumber").val());
    let numbers = [3,2,1];
    let word = ["Won't you be my neighbor?", "Boop", "Beep"];
    let userArray = createUserInputArray(userNum, numbers, word);
    console.log(userArray);
    weigh(userArray, numbers);
    $("p").text(userArray);
  });
});
