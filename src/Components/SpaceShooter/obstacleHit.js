import SSJSON from "../../Settings/spaceshooter.json";
import removeLife from "./removeLife";

export default function obstacleHit(obstacle, object) {
    if(object) {
        if(object.classList.contains(`ss-players`)) {
            for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                let player = document.getElementById(`ss-player-${i}`);
                if(!player) {
                    return;
                };
                if(object.id === player.id) {
                    removeLife(i);
                };
            };
        }
    };
    obstacle.remove();
};