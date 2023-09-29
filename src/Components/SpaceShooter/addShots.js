import SSJSON from "../../Settings/spaceshooter.json";

export default function addShots(index, shots, player) {
    SSJSON.players[index].shots += shots;
    let counter = document.getElementById(`ss-shots-counter-${index}`);
    counter.innerText = SSJSON.players[index].shots;

    const shotsAnimationTime = 2;
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    let playerPlace = player.getBoundingClientRect();
    let playerTop = playerPlace.top - gameAreaTop;
    let playerLeft = playerPlace.left - gameAreaLeft;

    let shotsDiv = document.createElement("div");
    shotsDiv.className = "ss-shots-gained";
    shotsDiv.innerHTML = `+${shots}`;
    shotsDiv.style = `
        top: ${playerTop - 20}px;
        left: ${playerLeft}px;
        color: ${SSJSON.players[index].color};
        animation: SSshotsAnimation ${shotsAnimationTime}s linear 1;
    `;

    gameArea.appendChild(shotsDiv);

    setTimeout(function() {
        if(shotsDiv) {
            shotsDiv.remove();
        }
    }, shotsAnimationTime * 1000);
};