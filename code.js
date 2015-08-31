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
        playerSixth.play();

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

$("#svgimg").fadeIn(2000);
$("#titlediv").fadeIn(4000);

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
    if(scrollLeft > 2600){
        $("#infodiv").fadeIn(1000);
    }
    else if(scrollLeft > 4200 || scrollLeft < 2750){
        $("#infodiv").fadeOut(400);
    }
    if(scrollLeft > 4200){
        $("#infodiv2").fadeIn(1000);

    }
    else if(scrollLeft > 5800 || scrollLeft < 4400){
        $("#infodiv2").fadeOut(400);
    }
    if(scrollLeft > 5800) {
        $("#wholenoteDiv").fadeIn(1000);
    }
    else if(scrollLeft > 7500 || scrollLeft < 6100){
        $("#wholenoteDiv").fadeOut(400);
    }
    if(scrollLeft > 7300){
        $("#halfnoteDiv").fadeIn(1000);
    }
    else if(scrollLeft > 9000 || scrollLeft < 7300){
        $("#halfnoteDiv").fadeOut(400);
    }
    if(scrollLeft > 9300){
        $("#4-delsDiv").fadeIn(1000);
    }
    else if(scrollLeft > 10800 || scrollLeft < 8900){
        $("#4-delsDiv").fadeOut(400);
    }
    if(scrollLeft > 10800){
        $("#8-delsDiv").fadeIn(1000);
    }
    else if(scrollLeft > 12400 || scrollLeft < 10400){
        $("#8-delsDiv").fadeOut(400);
    }
    if(scrollLeft > 12300){
        $("#16-delsDiv").fadeIn(1000);
    }
    else if(scrollLeft > 14200 || scrollLeft < 12200){
        $("#16-delsDiv").fadeOut(400);
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