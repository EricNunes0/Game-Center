import removeLoopAudios from "../../Functions/removeLoopAudios";
import destroyPlayer from "./destroyPlayer";
import disableMissionIsRunning from "./disableMissionIsRunning";
import SSJSON from "../../Settings/spaceshooter.json";

export default function defeatPlayers() {
    removeLoopAudios();
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        destroyPlayer(i);
    };
    disableMissionIsRunning();
}