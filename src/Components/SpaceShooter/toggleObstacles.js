import SSJSON from "../../Settings/spaceshooter.json";
import collisionTest from "./collisionTest";
import moveRival from "./moveRival";
import obstacleHit from "./obstacleHit";

export default function toggleObstacles() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    if(mission.isRunning === false) {
        return;
    };
    if(mission.obstacles) {
        let obstacleInterval = setInterval(function() {
            if(SSJSON.freeze === true) {
                console.error("Obstáculos desativados!");
                clearInterval(obstacleInterval);
                return;
            };
            if(SSJSON.missions[SSJSON.currentMission].isRunning === true) {
                const canvas = document.getElementById("space-shooter-canvas");

                const gameArea = document.querySelector("#ss-game-area");
                const gameAreaOffsets = gameArea.getBoundingClientRect();
                const gameAreaTop = gameAreaOffsets.top;
                const gameAreaLeft = gameAreaOffsets.left;

                let selectedObstacle = mission.obstacles[Math.floor(Math.random() * mission.obstacles.length)];
                const obstacleInfos = SSJSON.obstacles[selectedObstacle];
                const obstacleStyleWidth = obstacleInfos.width;
                const obstacleStyleHeight = obstacleInfos.height;
                const obstacleStyleTop = -obstacleStyleHeight;
                const obstacleStyleLeft = Math.floor(Math.random() * (canvas.offsetWidth - obstacleStyleWidth));
                const obstacleStyleBackgroundImage = obstacleInfos.backgroundImage;
                const obstacleStyleAnimationName = obstacleInfos.animationNames[Math.floor(Math.random() * obstacleInfos.animationNames.length)];
                const obstacleStyleAnimationDuration = obstacleInfos.animationDuration;
                const obstacle = document.createElement("div");
                obstacle.className = `ss-obstacles`;
                obstacle.style = `
                    top: ${obstacleStyleTop + 10}px;
                    left: ${obstacleStyleLeft}px;
                    width: ${obstacleStyleWidth}px;
                    height: ${obstacleStyleHeight}px;
                    background-image: url("${obstacleStyleBackgroundImage}");
                    animation: ${obstacleStyleAnimationName} ${obstacleStyleAnimationDuration}s linear 1;
                `;
                gameArea.appendChild(obstacle);

                let obstacleCollisionInterval = setInterval(function() {
                    if(SSJSON.freeze === true) {
                        return;
                    };

                    for(let shot of document.getElementsByClassName("shoots")) {
                        let collisionCheck = collisionTest(obstacle, shot);
                        if(collisionCheck === true) {
                            shot.remove();
                            obstacle.remove();
                        };
                    };

                    let objects = [];
                    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                        let player = document.getElementById(`ss-player-${i}`);
                        if(!player) {
                            return;
                        };
                        objects.push(player);
                    };
                    for(let rival of document.getElementsByClassName("ss-rivals")) {
                        objects.push(rival);
                    };
                    for(let object of objects) {
                        const obstacleOffsets = obstacle.getBoundingClientRect();
                        const obstacleTop = obstacleOffsets.top - gameAreaTop;
                        const obstacleLeft = obstacleOffsets.left - gameAreaLeft;

                        if(!object) {
                            return;
                        };
                        
                        let objectPlace = object.getBoundingClientRect();
                        let objectTop = objectPlace.top - gameAreaTop;
                        let objectLeft = objectPlace.left - gameAreaLeft;
                        let objectWidth = parseInt(object.style.width.slice(0, -2));
                        let objectHeight = parseInt(object.style.height.slice(0, -2));

                        let objectRight = objectLeft + objectWidth;
                        const obstacleRight = obstacleLeft + obstacleStyleWidth;
                        let objectBottom = objectTop + objectHeight;
                        const obstacleBottom = obstacleTop + obstacleStyleHeight;
                        let objectMiddle = (objectLeft + objectRight) / 2;
    
                        const collisionX = (objectRight >= obstacleLeft) && (objectLeft <= obstacleRight);
                        const collisionY = (objectBottom >= obstacleTop) && (objectTop <= obstacleBottom);

                        if(collisionX && object.classList.contains("ss-rivals")) {
                            moveRival(object, objectWidth, objectMiddle, obstacleLeft, obstacleRight);
                        }

                        if(collisionX && collisionY) {
                            obstacleHit(obstacle, object);
                            clearInterval(obstacleCollisionInterval);
                        };
                    }
                }, 2);

                setTimeout(function() {
                    if(obstacle) {
                        obstacle.remove();
                    }
                }, (obstacleStyleAnimationDuration * 1000) - 100);
            } else {
                clearInterval(obstacleInterval);
            };
        }, mission.obstacleInterval * 1000);
    };
};