import audio from "../../Functions/audios";
import Confetti from "../../Functions/confetti";
import minesweeperJSON from "../../Settings/minesweeper.json";
import disableAllSpaces from "./disableAllSpaces";

export default function MSCheckVictory() {
    let squares = document.getElementsByClassName("squares");
    let notActiveSquares = [];
    for(let square of squares) {
        if((!square.className.includes("active"))) {
            notActiveSquares.push(square);
        };
    }
    let missingPlaces = notActiveSquares.length - minesweeperJSON.bombsPlaces.length;
    if(missingPlaces === 0) {
        const confetti = new Confetti();
        confetti.start(`minesweeper-confetti-area`);
        document.getElementById("alert").innerText = "Parabéns, você venceu!";
        disableAllSpaces();
        audio("../../Audios/snd_MSVictory.mp3", 3.8);
        for(let bomb of minesweeperJSON.bombsPlaces) {
            let bombToFlower = document.getElementById(bomb);
            if(bombToFlower) {
                bombToFlower.classList.add("flower");
            }
        }
        setTimeout(function() {
            confetti.stop();
        }, 3000);
    }
}