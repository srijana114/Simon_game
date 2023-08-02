var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started = true;
    }
})

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
         setTimeout(function(){
            nextSequence();
         }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function nextSequence() {
   userClickedPattern = [];
   level++;
   $("#level-title").text("Level "+level);
   let randomNumber = Math.floor((Math.random()*4));
   let randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour); 
   $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
   playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}

function startOver(){
    level = 0; 
    gamePattern = [];
    started = false;
}

















// function makeSound(){
//     let randomNumber = Math.floor((Math.random()*4));
//    let randonChosenColour = buttonColours[randomNumber];
//    gamePattern.push(randonChosenColour);
//    $("#"+randonChosenColour).on("click", function(){
//     let chosenColour =  $("#"+randonChosenColour);

//     switch (chosenColour) {
//         case "red":
//             let redAudio  = new Audio("sounds/red.mp3");
//             redAudio.play();
//             break;
//         case "blue":
//             let blueAudio  = new Audio("sounds/blue.mp3");
//             blueAudio.play();
//             break;
//         case "yellow":
//             let yellowAudio  = new Audio("sounds/yellow.mp3");
//             yellowAudio.play();
//             break;
//         case "green":
//             let greenAudio  = new Audio("sounds/green.mp3");
//             greenAudio.play();
//             break;
//         default: console.log(chosenColour);
//             break;
//     }
//    })

// }

// makeSound();
