import centralizePlayers from "./centralizePlayers";
import rival0Appear from "./cutsceneAnimations.js/rival0Appear";
import freezeMoves from "./freezeMoves";
import hideHud from "./hideHud";
import removePlayers from "./removePlayers";
import shipsToTop from "./shipsToTop";

export default function cutscenePlay(id, duration) {
    if(id === 0) {
        freezeMoves(true);
        const gameArea = document.querySelector("#ss-game-area");
        const marsHeight = `10rem`;
        const block = document.createElement("div");
        block.className = `ss-blocks`;
        block.style = `
            position: absolute;
            z-index: 1;
            display: block;
            top: calc(-${marsHeight} - 2px);
            left: 0px;
            width: var(--ss-canvas-width);
            height: ${marsHeight};
            background-color: var(--ss-page-background-color);
            border-bottom: 2px solid #000;
        `;
        const mars = document.createElement("div");
        mars.className = `ss-frames`;
        mars.id = `ss-mars`;
        mars.style = `
            position: absolute;
            display: block;
            top: 0px;
            left: 0px;
            width: var(--ss-canvas-width);
            height: ${marsHeight};
            background-image: url("Images/space/mars(0).png");
            animation: MarsAppear 5s linear 1;
        `;
        setTimeout(function() {
            hideHud();
            centralizePlayers();
            gameArea.appendChild(block);
            gameArea.appendChild(mars);

            setTimeout(function() {
                shipsToTop(5);
                setTimeout(function() {
                    removePlayers();
                }, 5000);
            }, 5000);
        }, 7000);
    } else if(id === 1) {
        freezeMoves(true);
        setTimeout(function() {
            hideHud();
            centralizePlayers();
            rival0Appear();
            setTimeout(function() {
                shipsToTop(2);
                setTimeout(function() {
                    removePlayers();
                }, 2000);
            }, 3000);
        }, 7000);
    };
};