import SSJSON from "../../Settings/spaceshooter.json";
import checkMission from "./checkMission";

export default function destroyBoss(index) {
    let mission = SSJSON.missions[SSJSON.currentMission];

    const boss = document.getElementsByClassName(`ss-enemies boss ${index}`)[0];
    SSJSON.players[0].bossKills += 1;
    const missionText = document.getElementById("ss-mission-text")
    missionText.innerText = `${SSJSON.players[0].bossKills}/${mission.bosses.length}`;
    boss.remove();
}