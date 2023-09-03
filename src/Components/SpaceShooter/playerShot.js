import audio from "../../Functions/audios";
import SSJSON from "../../Settings/spaceshooter.json";
import shotDelay from "./shotDelay";
import dropShots from "./dropShots";
import addPoints from "./addPoints";
import addKill from "./addKill";
import addBossHit from "./addBossHit";
import collisionTest from "./collisionTest";
import enemyDefense from "./enemyDefense";
import enemyExplosion from "./enemyExplosion";

export default function playerShot(index) {
    let playerShot = SSJSON.guns[SSJSON.players[index].gun];
    if(SSJSON.freeze === true) {
        return;
    };
    if(SSJSON.freezeMovesOnly === true) {
        return;
    };
    const player = document.getElementById(`ss-player-${index}`);
    if(player) {
        if(SSJSON.players[index].shots <= 0) {
            return;
        };
        if(SSJSON.players[index].shotStop === true) {
            return;
        };
        SSJSON.players[index].shots--;
        document.getElementById(`ss-shots-counter-${index}`).innerText = SSJSON.players[index].shots;
        shotDelay(index);
        let shotWidth = playerShot.width;
        let shotHeight = playerShot.height;
        let shotBackgroundImage = playerShot.background;
        let shotAnimationName = playerShot.animations[Math.floor(Math.random() * playerShot.animations.length)];
        let shotAnimationDuration = playerShot.time;
        let shotAnimationTiming = playerShot.animationTiming;

        const gameArea = document.querySelector("#ss-game-area");
        const gameAreaOffsets = gameArea.getBoundingClientRect();
        const gameAreaTop = gameAreaOffsets.top;
        const gameAreaLeft = gameAreaOffsets.left;
        
        const playerOffsets = player.getBoundingClientRect();
        const playerTop = playerOffsets.top;
        const playerLeft = playerOffsets.left;
        
        const shot = document.createElement("div");
        shot.className = "shoots";
        shot.style = `
            position: absolute;
            display: block;
            width: ${shotWidth}px;
            height: ${shotHeight}px;
            top: ${playerTop - gameAreaTop}px;
            left: ${playerLeft - gameAreaLeft + 12}px;
            background-image: url("${shotBackgroundImage}");
            animation: ${shotAnimationName} ${shotAnimationDuration}s ${shotAnimationTiming} 1;
        `;
        gameArea.appendChild(shot);
        audio("../../Audios/space/snd_shot(0).mp3", 0.6);
        let enemiesHit = 0;
        let shotInterval = setInterval(() => {
            for(let enemy of document.querySelectorAll(".ss-enemies")) {
                const enemyPlace = enemy.getBoundingClientRect();
                const enemyTop = enemyPlace.top - gameAreaTop;
                const enemyLeft = enemyPlace.left - gameAreaLeft;
                const enemyWidth = parseInt(enemy.style.width.slice(0, -2));
                const enemyHeight = parseInt(enemy.style.height.slice(0, -2));

                let collisionCheck = collisionTest(shot, enemy);
                if(collisionCheck === true) {
                    if(enemy.classList.contains("boss")) {
                        shot.remove();
                        addBossHit(parseInt(enemy.classList[2]));
                    } else {
                        let defense = SSJSON.enemies[enemy.classList[1]].defense;
                        if(defense) {
                            if(!enemy.classList.contains(`defense`)) {
                                enemyDefense(enemy, shot);
                            } else {
                                enemiesHit++;
                                addPoints(index, 100 * enemiesHit, enemy);
                                addKill(index);
                                enemyExplosion(enemy);
                                enemy.remove();
                                audio("../../Audios/space/snd_enemyExplosion(0).mp3", 0.8);
                            };
                        } else {
                            enemiesHit++;
                            if((Math.floor(Math.random() * 5)) === 0) {
                                dropShots(enemy);
                            };
                            addPoints(index, 100 * enemiesHit, enemy);
                            addKill(index);
                            enemy.remove();
                            audio("../../Audios/space/snd_enemyExplosion(0).mp3", 0.8);
                            let explosion = document.createElement("div");
                            explosion.className = `ss-enemies-explosions`;
                            explosion.style = `
                                display: block;
                                width: ${enemyWidth}px;
                                height: ${enemyHeight}px;
                                top: ${enemyTop}px;
                                left: ${enemyLeft}px;
                            `;
                            gameArea.appendChild(explosion);
                            setTimeout(function() {
                                if(explosion) {
                                    gameArea.removeChild(explosion);
                                };
                            }, 1000);
                        };
                    };
                };
            };

            for(let enemyShot of document.getElementsByClassName("ss-enemy-shots")) {
                let collisionCheck = collisionTest(shot, enemyShot);
                if(collisionCheck === true) {
                    enemyShot.remove();
                };
            }

        }, 2);
        setTimeout(function() {
            if(shot) {
                shot.remove();
            };
            clearInterval(shotInterval);
        }, shotAnimationDuration * 1000);
    };
};