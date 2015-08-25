var wholenoteImg = document.getElementById("wholenoteImg");
var halfnoteImg = document.getElementById("halfnoteImg");
var quarternoteImg = document.getElementById("quarternoteImg");
var eightnoteImg = document.getElementById("eightnoteImg");
var sixthnoteImg = document.getElementById("sixthnoteImg");

var playerWhole = document.getElementById("playerWhole");
var playerHalf = document.getElementById("playerHalf");
var playerQuarter = document.getElementById("playerQuarter");
var playerEight = document.getElementById("playerEight");
var playerSixth = document.getElementById("playerSixth");

wholenoteImg.addEventListener("click", function(){
    if(playerWhole.paused === false){
        playerWhole.pause();
    }
    else {
        playerWhole.play()
    }
});

halfnoteImg.addEventListener("click", function(){
    if(playerHalf.paused === false){
        playerHalf.pause();
    }
    else {
        playerHalf.play()
    }
});

quarternoteImg.addEventListener("click", function(){
    if(playerQuarter.paused === false){
        playerQuarter.pause();
    }
    else {
        playerQuarter.play()
    }
});

eightnoteImg.addEventListener("click", function(){
    if(playerEight.paused === false){
        playerEight.pause();
    }
    else {
        playerEight.play()
    }
});

sixthnoteImg.addEventListener("click", function(){
    if(playerSixth.paused === false){
        playerSixth.pause();
    }
    else {
        playerSixth.play()
    }
});

//räknar vilken positon man är i
$(window).on("scroll", function() {
    console.log($(window).scrollLeft());
});

//gömmer först info, sen fadein vid 500
$("#info").hide();
$(window).scroll(function(){
    if($(this).scrollLeft() > 500){
        $("#info").fadeIn(5000);
    }
});

//** play and pause **//
/*
var playerc = document.getElementsByClassName("playerclass");



function playPause(){
    for(i=0; i < playerc.length; i++) {
        if (playerc[i].paused === false) {
            playerc[i].pause();
        }
        else {
            playerc[i].play();
        }
    }
}


function playPause(){
    for(i=0; i < playerc.length; i++) {
        if (playerc[i].paused === false) {
            playerc[i].pause();
        }
        else {
            playerc[i].play();
        }
    }
}

function playPauseNew(){
    $(".playerclass").each(function(index){
        console.log(index + "jag är:" + $(this));
    })
}
*/