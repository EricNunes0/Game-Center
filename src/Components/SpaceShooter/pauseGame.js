import SSJSON from "../../Settings/spaceshooter.json";
import freezeGame from "./freezeGame";
import resumeGame from "./resumeGame";

export default function pauseGame(boolean) {
    if(!(boolean === true || boolean === false)) {
        if(SSJSON.freeze === false) {
            pauseTrue();
        } else {
            pauseFalse();
        };
    } else {
        if(boolean === true) {
            pauseTrue();
        } else if(boolean === false) {
            pauseFalse();
        }
    };
};

function pauseTrue() {
    const pauseDiv = document.querySelector("#ss-pause-div");
    const pauseArea = document.querySelector("#ss-pause-area");
    pauseDiv.classList.remove("closed");
    pauseArea.classList.remove("closed");
    freezeGame();
};

function pauseFalse() {
    const pauseDiv = document.querySelector("#ss-pause-div");
    const pauseArea = document.querySelector("#ss-pause-area");
    pauseDiv.classList.add("closed");
    pauseArea.classList.add("closed");
    resumeGame();
};