import SSJSON from "../../Settings/spaceshooter.json";

export default function createPlayers() {
    const gameArea = document.querySelector("#ss-game-area");
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        let player = document.createElement("main");
        player.className = `ss-players`;
        player.id = `ss-player-${i}`;
        player.style = `
            left: ${140}px;
            top: 480px;
            width: ${SSJSON.players[i].width}px;
            height: ${SSJSON.players[i].height}px;
            background-image: url("${SSJSON.players[i].ship}")
        `;
        gameArea.appendChild(player);
    };
};