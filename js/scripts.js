function compare() {
  let userNum = parseInt($("input#userNumber").val());
    let numbers = [3,2,1];
    word = ["Wont you be my neighbor?", "Boop", "Beep"];
    result = "";
    for(let i=0; i<numbers.length; i++) {
      while(userNum>=numbers[i]){
        result = result + word[i];
        userNum = userNum - numbers[i]
      }
    };
}

$(document).ready(function() {
  $("form#roboger").submit(function(event) {
      compare();
    $("p").text(result);
    event.preventDefault();
  });
});