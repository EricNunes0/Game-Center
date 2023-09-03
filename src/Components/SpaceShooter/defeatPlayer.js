import removeLoopAudios from "../../Functions/removeLoopAudios";
import destroyPlayer from "./destroyPlayer";
import disableMissionIsRunning from "./disableMissionIsRunning";

export default function defeatPlayer(index) {
    removeLoopAudios();
    destroyPlayer(index);
    disableMissionIsRunning();
}