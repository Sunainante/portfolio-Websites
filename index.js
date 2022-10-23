var randomChosenColor = [];
var i=0;
var userClickedPettern = [];
var j=0;
var buttonColours = ["red","green","yellow","blue"];
var level=0;
function nextSequence(){
  var randomNumber = Math.random();
  randomNumber = Math.floor((randomNumber*4));
  var chosenButtonColour = buttonColours[randomNumber];
  randomChosenColor.push(chosenButtonColour);//pushing random number chosen array to empty array
  whenRandomButtonGetsClicked(chosenButtonColour);
}
function whenRandomButtonGetsClicked(colorId)
{
  $("#"+colorId).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}
$(document).keypress(function(){
  nextSequence();

  $("#level-title").text("Level " + level);
  level++;
  j=0;

});
$(".btn").click(function(){
    var checkButton = this.id;
    animateButtonWhenClicked(checkButton);
    // alert("hello");
    userClickedPettern[j]=checkButton;
    checkWhetherKeysMatch(j);
    j++;
    // randomChosenColor[i]=chosenButtonColour;
   // i++;
   // alert(randomChosenColor[i]);
});
function checkWhetherKeysMatch(currentLevel)
  {
    if(userClickedPettern[currentLevel] === randomChosenColor[currentLevel]){
      if(userClickedPettern.length === randomChosenColor.length){
      // alert(userClickedPettern.length);
      $("#level-title").css("color",green);
    }
}
    else{
      var audio = new Audio('wrong.mp3');
      audio.play();
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart your level is "+level);
      $("#level-title").css("color",red);
    }

  }


    // $('.okButton').click(function() { setTimeout(function() { ...}, 3000); });

  function animateButtonWhenClicked(key){
    switch(key)
    {
      case "green":
                  var audio = new Audio('green.mp3');
                  audio.play();
                  $("#green").addClass("pressed");
                  setTimeout(() => {$("#green").removeClass("pressed");  }, 100);
                   break;
      case "red":
                 var audio = new Audio('red.mp3');
                 $("#red").addClass("pressed");
                 setTimeout(() => {$("#red").removeClass("pressed");  }, 100);
                 audio.play();
                   break;
      case "yellow":
                   var audio = new Audio('yellow.mp3');
                   $("#yellow").addClass("pressed");
                   setTimeout(() => {$("#yellow").removeClass("pressed");  }, 100);
                 audio.play();
                  break;
      case "blue":
                 var audio = new Audio('blue.mp3');
                 $("#blue").addClass("pressed");
                 setTimeout(() => {$("#blue").removeClass("pressed");  }, 100);
                 audio.play();
                  break;

    }
  }













// $(".btn").click(function(){
//   $(".btn").addClass("pressed");
// })
// $("#green").click(function(){
//   $("#green").addClass("pressed");
//
// })
