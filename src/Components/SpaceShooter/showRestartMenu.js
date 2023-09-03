import SSJSON from "../../Settings/spaceshooter.json";
import checkLevelSelectButtons from "./checkLevelSelectButtons";
import cutscenePlay from "./cutscenePlay";
import disableMissionIsRunning from "./disableMissionIsRunning";
import freeze from "./freeze";
import removeFrames from "./removeFrames";
import revealHud from "./revealHud";
import scoreResults from './scoreResults';
import setStarsValue from "./setStarsValue";
import unlockLevel from "./unlockLevel";

export default function showRestartMenu() {
    let mission = SSJSON.missions[SSJSON.currentMission];

    document.querySelector("#ss-restart-div").classList.remove("closed");
    if(mission.completed === true) {
        disableMissionIsRunning();
        unlockLevel(SSJSON.currentMission);
        unlockLevel(SSJSON.currentMission + 1);
        checkLevelSelectButtons();
        if(mission.endCutscene) {
            cutscenePlay(mission.endCutscene.id, mission.endCutscene.duration);
            setTimeout(function() {
                revealHud();
                scoreResults();
                setStarsValue();
                freeze(true);
            }, mission.endCutscene.duration * 1000);
        } else {
            scoreResults();
            setStarsValue();
            freeze(true);
        };
    } else {
        document.querySelector("#ss-defeat-area").classList.remove("closed");
    };
};