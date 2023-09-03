export default function removeAudio(source) {
    for(let audio of document.getElementsByTagName("audio")) {
        if(audio.src.includes(source)) {
            audio.remove();
        };
    }
}