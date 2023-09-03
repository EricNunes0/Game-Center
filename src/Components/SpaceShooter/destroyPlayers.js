import explodeAllEnemies from "./explodeAllEnemies";
import explodeAllEnemyShots from "./explodeAllEnemyShots";
import freeze from "./freeze";
import removePlayer from "./removePlayer";
import showRestartMenu from "./showRestartMenu";
import SSJSON from "../../Settings/spaceshooter.json";

export default function destroyPlayers() {
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        removePlayer(i);
    };
    
    setTimeout(function() {
        freeze(true);
        showRestartMenu();
        explodeAllEnemies();
        explodeAllEnemyShots();
    }, 2000);
}