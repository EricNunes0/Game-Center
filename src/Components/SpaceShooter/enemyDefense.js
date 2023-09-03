import SSJSON from "../../Settings/spaceshooter.json";
import collisionTest from "./collisionTest";
import removeLife from "./removeLife";

export default function enemyDefense(enemy, shot) {
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    const shotTop = parseInt(shot.style.top.slice(0, -2));
    const shotLeft = parseInt(shot.style.left.slice(0, -2));
    const shotWidth = parseInt(shot.style.width.slice(0, -2));
    const shotHeight = parseInt(shot.style.height.slice(0, -2));
    const shotBackgroundImage = shot.style.backgroundImage;
    
    shot.remove();
    enemy.classList.add(`defense`);
    
    let enemyWidth = parseInt(enemy.style.width.slice(0, -2));
    let enemyHeight = parseInt(enemy.style.height.slice(0, -2));

    let backshotAnimationDuration = SSJSON.enemies[3].defense.duration;
    let backshotAnimationDelay = SSJSON.enemies[3].defense.delay;
    let backshot = document.createElement("div");
    backshot.className = `ss-back-shots`;
    backshot.style = `
        top: ${enemyHeight - 10}px;
        left: ${(enemyWidth / 2) - (shotWidth / 2)}px;
        width: ${shotWidth}px;
        height: ${shotHeight}px;
        background-image: ${shotBackgroundImage};
    `;
    enemy.appendChild(backshot);

    setTimeout(function() {
        gameArea.appendChild(backshot);
        enemy.classList.remove(`defense`);
        let enemyPlace = enemy.getBoundingClientRect();
        let enemyTop = enemyPlace.top;
        let enemyLeft = enemyPlace.left;
        let backshotTop = (enemyTop - gameAreaTop) + (enemyHeight - 10);
        let backshotLeft = (enemyLeft - gameAreaLeft) + ((enemyWidth / 2) - (shotWidth / 2));
        if(backshotLeft < 0) {
            backshot.remove();
            return;
        };
        backshot.style.top = `${backshotTop}px`;
        backshot.style.left = `${backshotLeft}px`;
        backshot.style.animation = `BackShot ${backshotAnimationDuration}s linear 1`;

        let backshotInterval = setInterval(function() {
            let players = document.querySelectorAll(".ss-players");
            for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                let player = document.getElementById(`ss-player-${i}`);
                if(player) {
                    let collisionCheck = collisionTest(backshot, players[i]);
                    if(collisionCheck === true) {
                        if(backshot) {
                            backshot.remove();
                        };
                        removeLife(i);
                    };
                };
            };
        }, 2);

        setTimeout(function() {
            if(backshot) {
                backshot.remove();
            };
            clearInterval(backshotInterval);
        }, backshotAnimationDuration * 1000);
    }, backshotAnimationDelay * 1000);
};