import SSJSON from "../../Settings/spaceshooter.json";
import checkMission from "./checkMission";

export default function addOrb(index) {
    let mission = SSJSON.missions[SSJSON.currentMission];
    SSJSON.players[index].orbs += 1;
    if(mission.categorie === `C`) {
        let playersOrbs = 0;
        for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
            playersOrbs += SSJSON.players[i].orbs;
        };
        document.getElementById("ss-mission-text").innerText = `${playersOrbs}/${mission.orbs}`;
        checkMission();
    };
};