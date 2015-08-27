var wholenoteImg = document.getElementById("wholenoteImg");
var halfnoteImg = document.getElementById("halfnoteImg");
var quarternoteImg = document.getElementById("quarternoteImg");
var eightnoteImg = document.getElementById("eightnoteImg");
var sixthnoteImg = document.getElementById("sixthnoteImg");
var footstepsImg = document.getElementById("footstepsImg");

var playerWhole = document.getElementById("playerWhole");
var playerHalf = document.getElementById("playerHalf");
var playerQuarter = document.getElementById("playerQuarter");
var playerEight = document.getElementById("playerEight");
var playerSixth = document.getElementById("playerSixth");
var playerFootsteps = document.getElementById("playerFootsteps");


var windowHeight = $(window).height();

//makes each slide equal to the height of the window
window.onload = function(){
    $.each($(".slide"), function(i, slide){
        $(this).css("height", windowHeight);
        console.log($(slide).height() );
    });
};


footstepsImg.addEventListener("click", function () {
    if(playerFootsteps.paused === false){
        playerFootsteps.pause();
    } else {
        playerFootsteps.play();
    }
});

//Alla spelare triggas plus playhead

wholenoteImg.addEventListener("click", function(){
    if(playerWhole.paused === false){
        playerWhole.pause();
        $(".playhead").animate({left: "100"}, 1);
    }
    else {
        playerWhole.play();

        $(".playhead")
            .delay(2400).animate({left: "1000px"}, 2400, "linear")
            .animate({left: "100"}, 1)


    }

});

halfnoteImg.addEventListener("click", function(){
    if(playerHalf.paused === false){
        playerHalf.pause();
        $(".playhead").animate({left: "100"}, 1);
    }
    else {
        playerHalf.play();

        $(".playhead")
            .delay(2400).animate({left: "1000px"}, 2400, "linear")
            .animate({left: "100"}, 1)
    }
});

quarternoteImg.addEventListener("click", function(){
    if(playerQuarter.paused === false){
        playerQuarter.pause();
        $(".playhead").animate({left: "100"}, 1);
    }
    else {
        playerQuarter.play();

        $(".playhead")
            .delay(2400).animate({left: "1000px"}, 2400, "linear")
            .animate({left: "100"}, 1)
    }
});

eightnoteImg.addEventListener("click", function(){
    if(playerEight.paused === false){
        playerEight.pause();
        $(".playhead").animate({left: "100"}, 1);
    }
    else {
        playerEight.play();

        $(".playhead")
            .delay(2400).animate({left: "1000px"}, 2400, "linear")
            .animate({left: "100"}, 1)
    }
});

sixthnoteImg.addEventListener("click", function(){
    if(playerSixth.paused === false){
        playerSixth.pause();
        $(".playhead").animate({left: "100"}, 1);
    }
    else {
        playerSixth.play()

        $(".playhead")
            .delay(2400).animate({left: "1000px"}, 2400, "linear")
            .animate({left: "100"}, 1)
    }
});

//räknar vilken positon man är i
$(window).on("scroll", function() {
    console.log($(window).scrollLeft());
});


//alla jävla animationer, triggade av scrollLeft-värde

$(window).scroll(function(){
    var scrollLeft = $(this).scrollLeft();

    if(scrollLeft > 1000){
        $("#rhythmh2").fadeIn(1000);
    }
    else if(scrollLeft > 1900 || scrollLeft < 1450) {
        $("#rhythmh2").fadeOut(400);
    }
    if(scrollLeft > 1400){
        $("#rhythmbox1").fadeIn(1000);
    }
    else if(scrollLeft > 1900 || scrollLeft < 1500){
        $("#rhythmbox1").fadeOut(400);
    }
    if(scrollLeft > 1600){
        $("#rhythmbox2").fadeIn(1000);
    }
    else if(scrollLeft > 2300 || scrollLeft < 1550){
        $("#rhythmbox2").fadeOut(400);
    }
    if(scrollLeft > 1800){
        $("#rhythmbox3").fadeIn(1000);
        $("#time-signature").fadeIn(2000);
    }
    else if(scrollLeft > 1900 || scrollLeft < 1650){
        $("#rhythmbox3").fadeOut(400);
        $("#time-signature").fadeOut(400);
    }
});



$(".box").on("click", function(){
    $(".box").animate({left: "1000px"}, 2400);

});






//this . css = var för height

//force horizontal scrolling
$(function() {

    $("body").mousewheel(function(event, delta) {

        this.scrollLeft -= (delta * 5);

        event.preventDefault();

    });

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