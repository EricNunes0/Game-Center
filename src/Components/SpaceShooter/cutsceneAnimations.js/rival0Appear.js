import SSJSON from "../../../Settings/spaceshooter.json";

export default function rival0Appear() {
    const gameArea = document.querySelector("#ss-game-area");
    let rivalInfos = SSJSON.rivals[0];
    let secs = 3;
    let boss1 = document.createElement("div");
    boss1.className = `ss-rivals`;
    boss1.style = `
        top: calc(0px - ${rivalInfos.height}px);
        left: calc(calc(var(--ss-canvas-width) / 2) - calc(${rivalInfos.width}px / 2));
        width: ${rivalInfos.width}px;
        height: ${rivalInfos.height}px;
        background-image: url("${rivalInfos.ship}");
        animation: rival0ToTop ${secs}s linear 1;
    `;
    gameArea.appendChild(boss1);
    setTimeout(function() {
        boss1.remove();
    }, secs * 1000);
};