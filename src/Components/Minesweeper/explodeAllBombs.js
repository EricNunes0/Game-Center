import disableAllSpaces from "./disableAllSpaces";
import sortArray from "./sortArray";
import minesweeperJSON from "../../Settings/minesweeper.json";
import audio from "../../Functions/audios";

export default async function explodeAllBombs() {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    sortArray(minesweeperJSON.bombsPlaces);
    disableAllSpaces();
    minesweeperJSON.explodeBombHandler = true;
    for(let i = 0; i <= minesweeperJSON.bombsPlaces.length - 1; i++) {
        try {
            if(minesweeperJSON.explodeBombHandler !== true) {
                break;
            };
            let bomb = minesweeperJSON.bombsPlaces[i];
            let bombToExplode = document.getElementById(bomb);
            if(!bombToExplode.className.includes("active")) {
                bombToExplode.classList.toggle("active");
                bombToExplode.classList.toggle("bomb");
                audio("../../Audios/snd_bomb.mp3", 3);
                await timer(100);
            };
        } catch (e) {
            console.error("explodeAllBombs(): Não foi possível explodir uma bomba.", e);
        }
    };
    minesweeperJSON.explodeBombHandler = false;
    console.log("Bombas foram explodidas!")
}