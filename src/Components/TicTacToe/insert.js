import addRedBorder from "./addRedBorder";
import blueButtonCheck from "./blueButtonCheck";
import changeTurnAlert from "./changeTurnAlert";
import checkVictory from "./checkVictory";
import redButtonCheck from "./redButtonCheck";
import removeRedBorders from "./removeRedBoards";
import settings from "../../Settings/configs.json";
import gameStats from "../../Settings/gameStats.json";
import audio from "../../Functions/audios";

export default function insert(value) {
    if(document.getElementById("ttt-" + value).disabled) {
        return;
    }
    removeRedBorders();
    if(gameStats.places[value - 1] !== 0) {
        audio("../../Audios/snd_bump.mp3", 1);
        addRedBorder(value);
        return;
    };
    audio("../../Audios/snd_click.mp3", 3);
    if(settings.gamemode === 0) {
        gameStats.places[value - 1] = 1;
        blueButtonCheck(value);
        let cpu;
        if(gameStats.places.includes(0)) {
            while(true) {
                cpu = Math.floor(Math.random() * 9) + 1;
                if(gameStats.places[cpu - 1] === 0) {
                    gameStats.places[cpu - 1] = 2;
                    redButtonCheck(cpu);
                    break;
                }
            };
        };
        checkVictory();
    } else if(settings.gamemode === 1) {
        let turnValue = gameStats.turnPlayer;
        gameStats.places[value - 1] = turnValue;
        if(gameStats.turnPlayer === 1) {
            blueButtonCheck(value);
            changeTurnAlert(2);
        } else if(gameStats.turnPlayer === 2) {
            redButtonCheck(value);
            changeTurnAlert(1);
        };
        gameStats.turnPlayer === 1 ? gameStats.turnPlayer = 2 : gameStats.turnPlayer = 1;
        checkVictory();
    };
    console.log("insert.js concluído!");
}