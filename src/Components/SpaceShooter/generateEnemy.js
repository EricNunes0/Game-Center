import audio from "../../Functions/audios";
import SSJSON from "../../Settings/spaceshooter.json";
import collisionTest from "./collisionTest";
import removeLife from "./removeLife";

export default function generateEnemy(index) {
    let mission = SSJSON.missions[SSJSON.currentMission];
    if(mission.maxEnemies) {
        let enemies = document.querySelectorAll(".ss-enemies");
        if(enemies.length >= mission.maxEnemies) {
            return;
        };
    };

    let animationTime = Math.floor(Math.random() * 4) + 8; /* Tempo de cada animação */
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    const enemyInfos = SSJSON.enemies[index];
    const enemyWidth = enemyInfos.width;
    const enemyHeight = enemyInfos.height;
    const enemyStyleTop = enemyInfos.top;
    let enemyShotImage = enemyInfos.shotImage;
    let enemyStyleLeft, enemyStyleAnimationTiming;
    if(index === 0) {
        let enemyLeftPos = [0, (gameArea.offsetWidth - enemyWidth)];
        enemyStyleLeft = enemyLeftPos[Math.floor(Math.random() * enemyLeftPos.length)];
        enemyStyleAnimationTiming = `ease-in-out`;
    } else if(index === 1) {
        let leftMin = enemyWidth;
        let leftMax = gameArea.offsetWidth - enemyWidth;
        enemyStyleLeft = Math.floor(Math.random() * (leftMax - leftMin)) + leftMin;
        enemyStyleAnimationTiming = `linear`;
    } else if(index === 2) {
        let leftMin = enemyWidth;
        let leftMax = gameArea.offsetWidth - enemyWidth;
        enemyStyleLeft = Math.floor(Math.random() * (leftMax - leftMin)) + leftMin;
        enemyStyleAnimationTiming = `linear`;
    }  else if(index === 3) {
        let leftMin = enemyWidth;
        let leftMax = gameArea.offsetWidth - enemyWidth;
        enemyStyleLeft = Math.floor(Math.random() * (leftMax - leftMin)) + leftMin;
        enemyStyleAnimationTiming = `ease-in-out`;
    };;
    let enemyAnimation = enemyInfos.animations[Math.floor(Math.random() * enemyInfos.animations.length)];

    const enemy = document.createElement("div");
    enemy.className = `ss-enemies ${index}`;
    enemy.style = `
        position: absolute;
        top: ${enemyStyleTop}px;
        left: ${enemyStyleLeft}px;
        width: ${enemyWidth}px;
        height: ${enemyHeight}px;
        background-image: url("${enemyInfos.ship}");
        animation: ${enemyAnimation} ${animationTime}s ${enemyStyleAnimationTiming} infinite;
    `;
    gameArea.appendChild(enemy);

    let shotIntervalTime = Math.floor(Math.random() * 2) + 3;
        
    /* Tiro do inimigo */
    if(index === 1 || index === 3) {
        let enemyCollisionInterval = setInterval(function() {
            if(SSJSON.freeze === true) {
                return;
            };

            if(SSJSON.enemies[index].defenseHold) {

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
                let collisionCheck = collisionTest(enemy, player);
                if(collisionCheck === true) {
                    if((player) && (enemy)) {
                        enemy.remove();
                        audio("../../Audios/space/snd_enemyExplosion(0).mp3", 0.8);
                        removeLife(i);
                    };
                }
            }
        }, 2);
        if(enemyInfos.permanent === true) {
            return;
        };
        setTimeout(function() {
            clearInterval(enemyCollisionInterval);
            if(enemy) {
                enemy.remove();
            };
        }, animationTime * 1000);
    } else if(index === 0 || index === 2) {
        let shotInterval = setInterval(function() {
            if(SSJSON.freeze === true) {
                return;
            };
            let enemyPlace = enemy.getBoundingClientRect();
            let enemyTop = enemyPlace.top;
            let enemyLeft = enemyPlace.left;
            if(enemyTop === 0 && enemyLeft === 0) {
                clearInterval(shotInterval);
                return;
            };
            let shotDuration = Math.floor(Math.random() * 3) + 2;
            for(let shotInfo of enemyInfos.shots) {
                let shot = document.createElement("div");
                shot.className = "ss-enemy-shots";
                let shotStyleBackgroundImage = shotInfo.shotImage;
                let shotStyleWidth = shotInfo.shotWidth;
                let shotStyleHeight = shotInfo.shotHeight;
                let shotStyleTop = enemyTop - gameAreaTop + shotInfo.relativeTop;
                let shotStyleLeft = enemyLeft - gameAreaLeft + shotInfo.relativeLeft;
                let shotStyleAnimationName = shotInfo.animationNames[Math.floor(Math.random() * shotInfo.animationNames.length)];
                let shotStyleAnimationTiming = shotInfo.animationTiming;
                shot.style = `
                    background-image: url("${shotStyleBackgroundImage}");
                    width: ${shotStyleWidth}px;
                    height: ${shotStyleHeight}px;
                    top: ${shotStyleTop}px;
                    left: ${shotStyleLeft}px;
                    animation: ${shotStyleAnimationName} ${shotDuration}s ${shotStyleAnimationTiming} 1;
                `;
                gameArea.appendChild(shot);

                let enemyShotInterval = setInterval(function() {
                    let players = document.getElementsByClassName("ss-players");
                    if(!players) {
                        return;
                    }

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
                        }
                    }
                }, 2);

                setTimeout(function() {
                    if(shot) {
                        shot.remove();
                    };
                    clearInterval(enemyShotInterval);
                }, shotDuration * 1000)
            };
        }, shotIntervalTime * 1000);

        setInterval(function() {
            if(SSJSON.freeze === true) {
                return;
            };
            enemyAnimation = enemyInfos.animations[Math.floor(Math.random() * enemyInfos.animations.length)];
            enemy.style.animation = `${enemyAnimation} ${animationTime}s ease-in-out infinite`;
        }, animationTime * 1000);
    };
};