import SSJSON from "../../Settings/spaceshooter.json";
import defeatPlayer from "./defeatPlayer";
import freeze from "./freeze";

export default function timePass() {
    let mission = SSJSON.missions[SSJSON.currentMission];

    const clockHand = document.getElementById("ss-clock-hand");
    const SSTime = document.getElementById("ss-time");
    
    SSTime.innerText = mission.time;
    let timePassInterval = setInterval(function() {
        if(mission.isRunning === false) {
            clearInterval(timePassInterval);
            return;
        };
        if(SSJSON.freeze === false) {
            if(SSJSON.players[0].time < mission.time) {
                for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                    SSJSON.players[i].time += 1;
                };
                SSTime.innerText = mission.time - SSJSON.players[0].time;

                let playerTime = SSJSON.players[0].time;
                let missionTime = mission.time;
                let maxDeg = 360;
                let timePercent = (playerTime * maxDeg) / missionTime;
                clockHand.style.rotate = `${maxDeg - parseFloat(timePercent).toFixed(0)}deg`;
            } else {
                freeze(true);
                defeatPlayer();
                clearInterval(timePassInterval);
            }
        };
    }, 1000);
}