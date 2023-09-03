import SSJSON from "../../Settings/spaceshooter.json";
import dropShots from "./dropShots";

export default function startDropShotLoop() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    //console.log("Loop iniciado na missão", mission.id);
    let dropLoop = setInterval(function() {
        if(mission.isRunning === true) {
            //console.log("Loopando da missão", mission.id);
            dropShots();
        } else {
            //console.log("Fim do loop da missão", mission.id);
            clearInterval(dropLoop);
        };
    }, 20000);
};