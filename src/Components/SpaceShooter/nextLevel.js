import audio from "../../Functions/audios";
import hideRestartMenu from "./hideRestartMenu";
import addMission from "./addMission";
import SSJSON from "../../Settings/spaceshooter.json";
import freeze from "./freeze";
import freezeMoves from "./freezeMoves";
import startGame from "./startGame";

export default function nextLevel() {
    let currentMission = SSJSON.currentMission;
    let mission = SSJSON.missions[currentMission];
    let nextMission = SSJSON.missions[currentMission + 1];
    if(nextMission) {
        if(mission.completed === true) {
            audio("../../Audios/space/snd_menuEffect(1).mp3", 0.8);
            freeze(false);
            freezeMoves(false);
            hideRestartMenu();
            addMission();
            startGame();
        };
    };
};