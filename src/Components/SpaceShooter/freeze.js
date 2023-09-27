import SSJSON from "../../Settings/spaceshooter.json";
import pauseCenaryAnimation from "./pauseCenaryAnimation";
import pauseEnemyAnimations from "./pauseEnemyAnimations";
import pauseEnemyShotAnimations from "./pauseEnemyShotAnimations";
import pauseShotItems from "./pauseShotItems";

export default function freeze(boolean) {
    const freeze = document.querySelector("#ss-freeze");
    if(boolean !== undefined) {
        if(boolean === true) {
            SSJSON.freeze = true;
            freeze.classList.remove("closed");
            pauseCenaryAnimation(true);
            pauseEnemyAnimations(true);
            pauseEnemyShotAnimations(true);
            pauseShotItems(true);
        } else if(boolean === false) {
            SSJSON.freeze = false;
            freeze.classList.add("closed");
            pauseCenaryAnimation(false);
            pauseEnemyAnimations(false);
            pauseEnemyShotAnimations(false);
            pauseShotItems(false);
        };
    };
}