import forcaJSON from "../../Settings/forca.json";
import audio from "../../Functions/audios";
import addTip from "./addTip";

export default function checkVictory() {
    if(forcaJSON.lettersRemaining <= 0) {
        document.getElementById("forca-message-area").classList.remove("closed");
        document.getElementById("forca-victory-message").classList.remove("closed");
        addTip(1);
        audio("../../Audios/snd_FVictory.mp3", 3.8);
    };
};