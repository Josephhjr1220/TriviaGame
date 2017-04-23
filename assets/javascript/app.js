$(document).ready(function(){

  var userChoice;
  var correctChoice = 0;
  var incorrectChoice = 0;
  // var answers = $("#a3", "#b2", "#c3", "#d3")

  var timer = 15;
  var setTimer;

  function start(){
     setTimer = setInterval(function(){
        timer--;
          $("#timer").html("Time Remaining: " + timer + "seconds");

             if (timer === 0){
               stop();
                $("div").html("<h2> Time's up!</h2>")

                }
            }, 15000);

        };

  function stop(){
     clearInterval(setTimer);
        };

  function firstQuestion() {
      if(userChoice === $("#a3")) {
          correctChoice++;

      } else {
          incorrectChoice++;
      }
  };
  function secondQuestion() {
      if(userChoice === $("#b2")) {
          correctChoice++;

      } else {
          incorrectChoice++;
      }
  };
  function thirdQuestion() {
      if(userChoice === $("#c3")) {
          correctChoice++;

      } else {
          incorrectChoice++;
      }
  };
  function fourthQuestion() {
      if(userChoice === $("#d3")) {
          correctChoice++;

      } else {
          incorrectChoice++;
      }
  };

console.log(timer);
console.log(userChoice);


});
