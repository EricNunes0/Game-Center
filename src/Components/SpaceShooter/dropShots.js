import audio from "../../Functions/audios";
import SSJSON from "../../Settings/spaceshooter.json";
import addShots from "./addShots";
import collisionTest from "./collisionTest";

export default function dropShots(enemy) {
    if(SSJSON.freeze === true) {
        return;
    };
    if(SSJSON.freezeMovesOnly === true) {
        return;
    };

    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    let dropGun = SSJSON.guns[SSJSON.players[0].gun];
    let dropWidth = dropGun.dropWidth;
    let dropHeight = dropGun.dropHeight;
    let dropDuration = dropGun.dropDuration;
    let dropTop, dropLeft;
    if(enemy) {
        const enemyOffsets = enemy.getBoundingClientRect();
        const enemyTop = enemyOffsets.top;
        const enemyLeft = enemyOffsets.left;
        dropTop = enemyTop - gameAreaTop;
        dropLeft = enemyLeft - gameAreaLeft;
    } else {
        dropTop = gameAreaTop;
        dropLeft = Math.floor(Math.random() * 290);
    };
    const drop = document.createElement("div");
    drop.className = "ss-shot-items";
    drop.style = `
        width: ${dropWidth}px;
        height: ${dropHeight}px;
        top: ${dropTop}px;
        left: ${dropLeft}px;
        background-image: url("${dropGun.background}");
        animation: GunRechargeFall ${dropDuration}s linear 1;
    `;

    gameArea.appendChild(drop);

    let dropActive = setInterval(() => {
        let players = document.getElementsByClassName("ss-players");
        if(!players) {
            return;
        }
        for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
            let player = document.getElementById(`ss-player-${i}`);
            if(!player) {
                return;
            };
            let collisionCheck = collisionTest(drop, player);
            if(collisionCheck === true) {
                drop.remove();
                audio("../../Audios/space/snd_recharge.mp3", 1);
                let shotsToAdd = SSJSON.guns[SSJSON.players[0].gun].recharge;
                addShots(i, shotsToAdd, player);
            };
        };
    }, 2);

    setTimeout(function() {
        if(drop) {
            drop.remove();
        };
        clearInterval(dropActive);
    }, dropDuration * 1000);
}