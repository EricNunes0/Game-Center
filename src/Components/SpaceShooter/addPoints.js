import SSJSON from "../../Settings/spaceshooter.json";

export default function addPoints(index, points, enemy) {
    const pointsAnimationTime = 2;

    SSJSON.players[index].points += points;
    document.getElementById(`ss-points-${index}`).innerText = SSJSON.players[index].points;

    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    let enemyPlace = enemy.getBoundingClientRect();
    let enemyTop = enemyPlace.top - gameAreaTop;
    let enemyLeft = enemyPlace.left - gameAreaLeft;

    let pointsDiv = document.createElement("div");
    pointsDiv.className = "ss-points-gained";
    pointsDiv.innerHTML = points;
    pointsDiv.style = `
        top: ${enemyTop - 10}px;
        left: ${enemyLeft}px;
        color: ${SSJSON.players[index].color};
        animation: SSpointsAnimation ${pointsAnimationTime}s linear 1;
    `;

    gameArea.appendChild(pointsDiv);

    setTimeout(function() {
        if(pointsDiv) {
            pointsDiv.remove();
        }
    }, pointsAnimationTime * 1000);
};