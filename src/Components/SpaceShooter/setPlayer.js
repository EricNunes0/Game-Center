import SSJSON from "../../Settings/spaceshooter.json";

export default function setPlayer() {
    const gameArea = document.querySelector("#ss-game-area");
    if(!document.getElementById("ss-player")) {
        let player = document.createElement("main");
        player.id = "ss-player";
        player.style = `
            left: 140px;
            top: 480px;
            width: ${SSJSON.players[0].width}px;
            height: ${SSJSON.players[0].height}px;
            background-image: url("${SSJSON.players[0].ship}")
        `;
        gameArea.appendChild(player);
    };
};