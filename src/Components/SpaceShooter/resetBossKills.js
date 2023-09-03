import SSJSON from "../../Settings/spaceshooter.json";

export default function resetBossKills() {
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        SSJSON.players[i].bossKills = 0;
    };
    let missionText = document.getElementById("ss-mission-text");
    missionText.style.color = "#fff";
};