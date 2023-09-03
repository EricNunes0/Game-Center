import SSJSON from "../../Settings/spaceshooter.json";
import defeatPlayer from "./defeatPlayer";
import freeze from "./freeze";

export default function timePass() {
    let mission = SSJSON.missions[SSJSON.currentMission];

    const SSTimeDiv = document.getElementById("ss-time-div");
    const SSTime = document.getElementById("ss-time");
    
    SSTime.innerText = mission.time;
    let timePassInterval = setInterval(function() {
        if(mission.isRunning === false) {
            clearInterval(timePassInterval);
            return;
        };
        if(SSJSON.players[0].time < mission.time) {
            for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                SSJSON.players[i].time += 1;
            };
            SSTime.innerText = mission.time - SSJSON.players[0].time;

            let playerTime = SSJSON.players[0].time;
            let missionTime = mission.time;
            let timePercent = (playerTime * 100) / missionTime;
            SSTimeDiv.style.backgroundSize = `100% ${100 - parseFloat(timePercent).toFixed(0)}%`;
        } else {
            freeze(true);
            defeatPlayer();
            clearInterval(timePassInterval);
        }
    }, 1000);
}