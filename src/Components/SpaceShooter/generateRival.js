import audio from "../../Functions/audios";
import SSJSON from "../../Settings/spaceshooter.json";
import collisionTest from "./collisionTest";
import removeLife from "./removeLife";
import rivalShotHit from "./rivalShotHit";
import rivalSwordAttack from "./rivalSwordAttack";

export default function generateRival(index) {
    let animationTime = 2;
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    SSJSON.rivals[0].lifes = SSJSON.rivals[0].lifesMax;
    let rivalInfos = SSJSON.rivals[index];
    let rivalWidth = rivalInfos.width;
    let rivalHeight = rivalInfos.height;
    let rivalBackgroundImage = rivalInfos.ship;
    let rivalStyleAnimationTiming = rivalInfos.animationTiming;
    let rivalStyleTop;
    let rivalStyleLeft = rivalInfos.left;
    //let rivalAnimation = rivalInfos.animations[Math.floor(Math.random() * rivalInfos.animations.length)];
    const rival = document.createElement("div");
    rival.className = `ss-rivals`;
    rival.id = `ss-rival-${index}`;
    rival.style = `
        top: 420px;
        left: ${rivalStyleLeft}px;
        width: ${rivalWidth}px;
        height: ${rivalHeight}px;
        background-image: url("${rivalBackgroundImage}");
    `;
    gameArea.appendChild(rival);

    /* Ataques dos rivais */
    if(index === 0) {
        let attackInterval = setInterval(function() {
            if(SSJSON.freeze === true) {
                return;
            };
            for(let shot of document.getElementsByClassName("shoots")) {
                let collisionCheck = collisionTest(rival, shot);
                if(collisionCheck === true) {
                    shot.remove();
                    rivalShotHit(rival);
                };
            };

            let players = document.getElementsByClassName("ss-players");
            if(!players) {
                return;
            }
            for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                let player = document.getElementById(`ss-player-${i}`);
                if(!player) {
                    return;
                };
                let collisionCheck = collisionTest(rival, player);
                if(collisionCheck === true) {
                    if((player) && (rival)) {
                        rivalSwordAttack(rival, index);
                    };
                }
            };
        }, 2);
    };
};