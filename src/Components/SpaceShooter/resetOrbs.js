import SSJSON from "../../Settings/spaceshooter.json";

export default function resetOrbs() {    
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        SSJSON.players[i].orbs = 0;
    }
    let missionText = document.getElementById("ss-mission-text");
    missionText.style.color = "#fff";
};