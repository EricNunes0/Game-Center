var audiosOn = 1;

function audioConfig() {
    audiosOn == 0 ? enableAudios() : disableAudios();
};

function enableAudios() {
    audiosOn = 1;
    //document.getElementById("sound-icon").src = "https://i.imgur.com/hmiIbPC.png";
};

function disableAudios() {
    audiosOn = 0;
    //document.getElementById("sound-icon").src = "https://i.imgur.com/dHsU5x8.png";
};

function removeAudios() {
    let audios = document.getElementsByTagName("audio");
    for(let audio of audios) {
        audio.remove();
    };
};

function playAudio(source, secs) {
    removeAudios();
    if(audiosOn == 0) return;
    let newAudio = document.createElement("audio");
    newAudio.src = source;
    newAudio.setAttribute("preload", "auto");
    newAudio.setAttribute("controls", "none");
    document.body.appendChild(newAudio);
    newAudio.play();
    setTimeout(function() {
        newAudio.remove();
    }, secs * 1000);
};