import settings from "../Settings/configs.json";
import audioConfig from "./audioConfig";
import removeAllAudios from "./removeAllAudios";

export default function audio(source, secs) {
    //removeAllAudios();
    if(settings.audiosEnabled == false) return;
    let newAudio = document.createElement("audio");
    newAudio.src = source;
    newAudio.setAttribute("preload", "auto");
    newAudio.setAttribute("controls", "none");
    if(secs === Infinity) {
        newAudio.classList.add("loop");
        newAudio.loop = true;
        newAudio.volume = 0.5;
    };

    document.body.appendChild(newAudio);
    newAudio.play().catch((e) => {
        console.warn("Áudio sobreposto");
    });

    if(secs !== Infinity) {
        setTimeout(function() {
            newAudio.remove();
        }, secs * 1000);
    };
    //console.log("audio removido!");
};