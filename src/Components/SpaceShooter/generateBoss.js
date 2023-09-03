import audio from "../../Functions/audios";
import SSJSON from "../../Settings/spaceshooter.json";
import collisionTest from "./collisionTest";
import removeLife from "./removeLife";

export default function generateBoss(index) {
    let animationTime = 2;
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    SSJSON.bosses[0].lifes = SSJSON.bosses[0].lifesRecover;
    let bossInfos = SSJSON.bosses[index];
    let bossWidth = bossInfos.width;
    let bossHeight = bossInfos.height;
    let bossBackgroundImage = bossInfos.ship;
    let bossStyleAnimationTiming = bossInfos.animationTiming;
    let bossTop, bossLeft;
    if(index === 0) {
        let bossLeftPos = [0, (gameArea.offsetWidth - bossWidth)];
        bossTop = 100;
        bossLeft = bossLeftPos[Math.floor(Math.random() * bossLeftPos.length)];
    }
    let bossAnimation = bossInfos.animations[Math.floor(Math.random() * bossInfos.animations.length)];
    const boss = document.createElement("div");
    boss.className = `ss-enemies boss ${index}`;
    boss.style = `
        top: ${bossTop}px;
        left: ${bossLeft}px;
        width: ${bossWidth}px;
        height: ${bossHeight}px;
        background-image: url("${bossBackgroundImage}");
        animation: ${bossAnimation} ${animationTime}s ${bossStyleAnimationTiming} infinite;
    `;
    gameArea.appendChild(boss);

    let shotIntervalTime = 1.5;
        
    /* Tiro do inimigo */
    if(index === 0) {
        let shotInterval = setInterval(function() {
            if(SSJSON.freeze === true) {
                return;
            };
            let bossPlace = boss.getBoundingClientRect();
            let bossTop = bossPlace.top;
            let bossLeft = bossPlace.left;
            if(bossTop === 0 && bossLeft === 0) {
                clearInterval(shotInterval);
                return;
            };
            let shotWidth = bossInfos.shotWidth;
            let shotHeight = bossInfos.shotHeight
            let shotDuration = Math.floor(Math.random() * 2) + 1;
            let shot = document.createElement("div");
            shot.className = "ss-boss-shots";
            shot.style = `
                top: ${bossTop - gameAreaTop + bossHeight}px;
                left: ${(bossLeft - gameAreaLeft) + (bossWidth / 2)}px;
                width: ${shotWidth}px;
                height: ${shotHeight}px;
                background-image: url("${bossInfos.shotImage}");
                animation: SSshotItemsFall ${shotDuration}s linear 1;
            `;
            gameArea.appendChild(shot);

            let bossShotInterval = setInterval(function() {
                for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                    let player = document.getElementById(`ss-player-${i}`);
                    if(!player) {
                        return;
                    };
                    let collisionCheck = collisionTest(shot, player);
                    if(collisionCheck === true) {
                        if((player) && (shot)) {
                            shot.remove();
                            removeLife(i);
                        };
                    };
                }
            }, 2);

            setTimeout(function() {
                if(shot) {
                    shot.remove();
                };
                clearInterval(bossShotInterval);
            }, shotDuration * 1000)
        }, shotIntervalTime * 1000);

        setInterval(function() {
            if(SSJSON.freeze === true) {
                return;
            };
            let bossAnimation = bossInfos.animations[Math.floor(Math.random() * bossInfos.animations.length)];
            boss.style.animation = `${bossAnimation} ${animationTime}s ${bossStyleAnimationTiming} infinite`;
        }, animationTime * 1000);
    };
};