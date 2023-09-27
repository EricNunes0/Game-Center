import SSJSON from "../../Settings/spaceshooter.json";
import pauseCenaryAnimation from "./pauseCenaryAnimation";
import pauseEnemyAnimations from "./pauseEnemyAnimations";
import pauseEnemyShotAnimations from "./pauseEnemyShotAnimations";

export default function freeze(boolean) {
    const freeze = document.querySelector("#ss-freeze");
    if(boolean !== undefined) {
        if(boolean === true) {
            SSJSON.freeze = true;
            freeze.classList.remove("closed");
            pauseCenaryAnimation(true);
            pauseEnemyAnimations(true);
            pauseEnemyShotAnimations(true);
        } else if(boolean === false) {
            console.log(false)
            SSJSON.freeze = false;
            freeze.classList.add("closed");
            pauseCenaryAnimation(false);
            pauseEnemyAnimations(false);
            pauseEnemyShotAnimations(false);
        };
    };
}