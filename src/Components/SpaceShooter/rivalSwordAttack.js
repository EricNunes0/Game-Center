import SSJSON from "../../Settings/spaceshooter";
import collisionTest from "./collisionTest";
import createRivalAlert from "./createRivalAlert";
import removeLife from "./removeLife";

export default function rivalSwordAttack(rival, rivalId) {
    let rivalInfos = SSJSON.rivals[rivalId]; // Mudar para rivalId;
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    //let swordInterval = setInterval(function() {
        if(rivalInfos.sword.running === true) {
            return;
        };
        rivalInfos.sword.running = true;
        console.warn("Trigger da espada ativado");
        createRivalAlert(rival, rivalInfos.sword.delay);

        setTimeout(function() {
            const sword = document.createElement("div");
            sword.className = `ss-rival-swords`;
            const swordWidth = rivalInfos.sword.width;
            const swordHeight = rivalInfos.sword.height;
            sword.style = `
                top: ${rivalInfos.sword.top}px;
                left: ${rivalInfos.sword.left}px;
                width: ${swordWidth}px;
                height: ${swordHeight}px;
                background-color: #fff;
                background-image: url("Images/Space/sabers/saber(0).png");
                filter: drop-shadow(0 0 3px #fff);
            `;
            rival.appendChild(sword);
            let rivalAnimation = rivalInfos.sword.animationNames[Math.floor(Math.random() * rivalInfos.sword.animationNames.length)];
            rival.style.animation = `${rivalAnimation} ${rivalInfos.sword.duration}s linear 1`;

            let attackInterval = setInterval(function() {
                if(SSJSON.freeze === true) {
                    return;
                };
                console.log(sword.className);
                if(sword.classList.contains("invisible")) {
                    return;
                };

                for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                    let player = document.getElementById(`ss-player-${i}`);
                    if(!player) {
                        return;
                    };
                    let collisionCheck = collisionTest(sword, player);
                    if(collisionCheck === true) {
                        if((player) && (sword)) {
                            sword.classList.add("invisible");
                            removeLife(i);
                        };
                    };
                };
            }, 2);
            setTimeout(function() {
                if(sword) {
                    sword.remove();
                };
                rival.style.removeProperty("animation");
                rivalInfos.sword.running = false;
                clearInterval(attackInterval);
            }, rivalInfos.sword.duration * 1000);
        }, rivalInfos.sword.delay * 1000);
    //}, rivalInfos.sword.duration * 1000);
};