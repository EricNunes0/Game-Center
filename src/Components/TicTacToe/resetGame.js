import audio from "../../Functions/audios";
import gameStats from "../../Settings/gameStats.json";
import removeRedBorders from "./removeRedBoards";

export default function resetGame() {
    removeRedBorders();
    for(let i = 0; i <= gameStats.places.length - 1; i++) {
        let btn = document.getElementById("ttt-" + parseInt(i + 1));
        btn.className = btn.className.replace("blue", "gray").replace("red", "gray").replace("win", "default");
        btn.style.removeProperty("background-color");
        gameStats.places[i] = 0;
        btn.disabled = false;
    }
    audio("../../Audios/snd_repeat.mp3", 3);
}