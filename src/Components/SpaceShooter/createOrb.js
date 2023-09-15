import audio from "../../Functions/audios";
import SSJSON from "../../Settings/spaceshooter.json";
import addOrb from "./addOrb";
import addShots from "./addShots";
import collisionTest from "./collisionTest";

export default function createOrb() {
    const player = document.querySelector("#ss-player");
    const dropTime = 5;/* Duração da animação de queda */

    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    let shotTop = gameAreaTop, shotLeft = Math.floor(Math.random() * 290);

    const orb = document.createElement("div");
    const orbWidth = 20;
    const orbHeight = 20;
    orb.className = "ss-orbs";
    orb.style = `
        position: absolute;
        top: ${shotTop}px;
        left: ${shotLeft}px;
        width: ${orbWidth}px;
        height: ${orbHeight}px;
        background-image: url("Images/spaceshooter/orbs/orb(0).png");
        animation: SSshotItemsFall ${dropTime}s linear 1;
    `;

    gameArea.appendChild(orb);

    let orbActive = setInterval(() => {
        for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
            let player = document.getElementById(`ss-player-${i}`);
            if(!player) {
                return;
            };
            let collisionCheck = collisionTest(orb, player);
            if(collisionCheck === true) {
                orb.remove();
                audio("../../Audios/space/snd_recharge.mp3", 1);
                addOrb(i);
            };
        };
    }, 2);

    setTimeout(function() {
        if(orb) {
            orb.remove();
        };
        clearInterval(orbActive);
    }, dropTime * 1000);
}