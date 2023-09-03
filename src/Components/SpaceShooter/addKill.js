import SSJSON from "../../Settings/spaceshooter.json";
import checkMission from "./checkMission";

export default function addKill(index) {
    let mission = SSJSON.missions[SSJSON.currentMission];
    SSJSON.players[index].kills += 1;
    if(mission.categorie === `K`) {
        let playersKills = 0;
        for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
            playersKills += SSJSON.players[i].kills;
        };
        document.getElementById("ss-mission-text").innerText = `${playersKills}/${mission.kills}`;
        checkMission();
    };
};