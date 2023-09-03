import SSJSON from "../../Settings/spaceshooter.json";
import checkMission from "./checkMission";
import destroyBoss from "./destroyBoss";

export default function addBossHit(index) {
    SSJSON.bosses[index].lifes -= 1;
    console.warn(`${SSJSON.bosses[index].lifes} vidas restantes`);
    if(SSJSON.bosses[index].lifes <= 0) {
        destroyBoss(index);
        checkMission();
    }
}