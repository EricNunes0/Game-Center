import SSJSON from "../../Settings/spaceshooter.json";
import movePlayer from "./movePlayer";
import playerShot from "./playerShot";

export default function keyDown() {
    const players = document.getElementsByClassName("ss-players");
    if(!players) {
        return;
    };
    if(SSJSON.keysActive === true) {
        return;
    };
    SSJSON.keysActive = true;

    document.addEventListener("keydown", (e) => {
        let keyPressed = e.code;
        for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
            let controls = SSJSON.players[i].controls;
            if(controls.movePlayerLeft.includes(keyPressed)) {
                movePlayer(i, "left");
            } else if(controls.movePlayerRight.includes(keyPressed)) {
                movePlayer(i, "right");
            } else if(controls.playerShot.includes(keyPressed)) {
                playerShot(i);
            }
        }
    });
};