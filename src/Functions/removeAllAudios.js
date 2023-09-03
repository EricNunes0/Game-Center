export default function removeAllAudios() {
    let audios = document.getElementsByTagName("audio");
    for(let audio of audios) {
        if(!audio.classList.contains("loop")) {
            audio.remove();
        };
    };
};