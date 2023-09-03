import explodeAllEnemies from "./explodeAllEnemies";
import explodeAllEnemyShots from "./explodeAllEnemyShots";
import freeze from "./freeze";
import removePlayer from "./removePlayer";
import showRestartMenu from "./showRestartMenu";

export default function destroyPlayer(index) {
    removePlayer(index);
    
    setTimeout(function() {
        freeze(true);
        showRestartMenu();
        explodeAllEnemies();
        explodeAllEnemyShots();
    }, 2000);
}