var note = document.getElementById("testbild");

var player = document.getElementById("wholenote_player");

note.addEventListener("click", function(){
    if(player.paused === false) {
        player.pause();
    }
    else {
        player.play();
    }
});
