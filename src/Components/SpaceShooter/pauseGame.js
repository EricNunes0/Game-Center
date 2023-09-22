import SSJSON from "../../Settings/spaceshooter.json";
import freezeGame from "./freezeGame";
import resumeGame from "./resumeGame";

export default function pauseGame() {
    SSJSON.freeze === false ? freezeGame() : resumeGame();
};