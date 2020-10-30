/*function split(){
  let userNum = parseInt($("input#userNumber").val());
  let userArray = userNum.split("");
}*/
function compare() {
  //split();
  let userNum = parseInt($("input#userNumber").val());
    let numbers = [3,2,1];
    word = ["Won't you be my neighbor?", "Boop", "Beep"];
    result = "";
    for(let i=0; i<numbers.length; i++) {
      while(userNum>=numbers[i]){
        result = /*result +*/ word[i];
        userNum = userNum - numbers[i]
        //bigUserNum = Math.max(...userArray);
      }
      /*if (numbers[0] > numbers[2]) {
        result = "Won't you be my neighbor?";
      } else if (numbers[0] > numbers[1] ) {
          result = "Won't you be my neighbor?";
      } else if (numbers[1] > numbers[2]); {
      }*/
    };
}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
      compare();
    $("p").text(result);
    event.preventDefault();
  });
});