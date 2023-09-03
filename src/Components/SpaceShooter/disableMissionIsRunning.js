import SSJSON from "../../Settings/spaceshooter.json";

export default function disableMissionIsRunning() {
    SSJSON.missions[SSJSON.currentMission].isRunning = false;
};