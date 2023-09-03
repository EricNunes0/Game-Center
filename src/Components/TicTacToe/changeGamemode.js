import resetGame from "./resetGame";
import generateTurnPlayer from "./generateTurnPlayer";
import changeTurnAlert from "./changeTurnAlert";
import resetPoints from "./resetPoints";
import settings from "../../Settings/configs.json";

export default function changeGamemode() {
    resetGame();
    let modeImg = document.getElementById("mode-image");
    let alertMsg = document.getElementById("alert-message");
    switch(settings.gamemode) {
        case(0):
            settings.gamemode = 1;
            modeImg.src = "https://i.imgur.com/pL2xig4.png";
            alertMsg.className = alertMsg.className.replace("hidden", "appered");
            let g = generateTurnPlayer();
            changeTurnAlert(g);
            resetPoints();
            document.getElementById("game-mode").innerText = "2 jogadores";
            break;
        case(1):
            settings.gamemode = 0;
            modeImg.src = "https://i.imgur.com/eJiT4kJ.png";
            alertMsg.className = alertMsg.className.replace("appered", "hidden");
            resetPoints();
            document.getElementById("game-mode").innerText = "1 jogador";
            break;
        default:
            break;
    }
}