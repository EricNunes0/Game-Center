import SSJSON from "../../Settings/spaceshooter.json";

export default function resetTime() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        SSJSON.players[i].time = 0;
    };
    document.getElementById("ss-time").innerText = mission.time;
}