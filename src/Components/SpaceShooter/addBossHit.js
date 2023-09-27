import SSJSON from "../../Settings/spaceshooter.json";
import bossBarProgress from "./bossBarProgress";
import checkMission from "./checkMission";
import destroyBoss from "./destroyBoss";
import hideBossBar from "./hideBossBar";

export default function addBossHit(index) {
    SSJSON.bosses[index].lifes -= 1;
    console.warn(`${SSJSON.bosses[index].lifes} vidas restantes`);
    bossBarProgress(SSJSON.bosses[index].lifesRecover, SSJSON.bosses[index].lifes);
    if(SSJSON.bosses[index].lifes <= 0) {
        hideBossBar();
        destroyBoss(index);
        checkMission();
    }
}