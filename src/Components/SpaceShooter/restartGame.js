import SSJSON from "../../Settings/spaceshooter.json";
import freeze from "./freeze";
import freezeMoves from "./freezeMoves";
import hideRestartMenu from "./hideRestartMenu";
import startGame from "./startGame";
import removeLoopAudios from "../../Functions/removeLoopAudios";

export default function restartGame() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    if(mission) {
        freeze(false);
        freezeMoves(false);
        hideRestartMenu();
        removeLoopAudios();
        startGame();
    };
};