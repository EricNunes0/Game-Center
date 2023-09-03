import SSJSON from "../../Settings/spaceshooter.json";

export default function enableMissionIsRunning() {
    SSJSON.missions[SSJSON.currentMission].isRunning = true;
};