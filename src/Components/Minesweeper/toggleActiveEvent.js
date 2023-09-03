import changePageIcon from "./changePageIcon";
import checkProxs from "./checkProxs";
import explodeAllBombs from "./explodeAllBombs";
import MSCheckVictory from "./MSCheckVictory";
import minesweeperJSON from "../../Settings/minesweeper.json";
import audio from "../../Functions/audios";

export default function toggleActiveEvent(y, x) {
    let square = document.getElementsByClassName(`${y}x${x}`)[0];
    console.log(y, x, square)
    if(square) {
        if(square.className.includes("active")) {
            return;
        };
        if(square.className.includes("flag")) {
            return;
        };
        square.classList.toggle("active");
        if(minesweeperJSON.numbers1.includes(square.id)) {
            square.classList.toggle("number1");
            audio("../../Audios/snd_press.mp3", 0.5);
            changePageIcon(minesweeperJSON.minesweeperIcons.blue);
            MSCheckVictory();
            return;
        } else if(minesweeperJSON.numbers2.includes(square.id)) {
            square.classList.toggle("number2");
            audio("../../Audios/snd_press.mp3", 0.5);
            changePageIcon(minesweeperJSON.minesweeperIcons.green);
            MSCheckVictory();
            return;
        } else if(minesweeperJSON.numbers3.includes(square.id)) {
            square.classList.toggle("number3");
            audio("../../Audios/snd_press.mp3", 0.5);
            changePageIcon(minesweeperJSON.minesweeperIcons.red);
            MSCheckVictory();
            return;
        } else if(minesweeperJSON.numbers4.includes(square.id)) {
            square.classList.toggle("number4");
            audio("../../Audios/snd_press.mp3", 0.5);
            changePageIcon(minesweeperJSON.minesweeperIcons.pink);
            MSCheckVictory();
            return;
        } else if(minesweeperJSON.numbers5.includes(square.id)) {
            square.classList.toggle("number5");
            audio("../../Audios/snd_press.mp3", 0.5);
            changePageIcon(minesweeperJSON.minesweeperIcons.yellow);
            MSCheckVictory();
            return;
        } else if(minesweeperJSON.numbers6.includes(square.id)) {
            square.classList.toggle("number6");
            audio("../../Audios/snd_press.mp3", 0.5);
            MSCheckVictory();
            return;
        } else if(minesweeperJSON.bombsPlaces.includes(parseInt(square.id))) {
            square.classList.toggle("bomb");
            document.getElementById("alert").innerText = "Você perdeu!";
            audio("../../Audios/snd_bomb.mp3", 3);
            changePageIcon(minesweeperJSON.minesweeperIcons.gray);
            explodeAllBombs(y, x);
            return;
        };
        checkProxs(square.id);
        audio("../../Audios/snd_press.mp3", 0.5);
        changePageIcon(minesweeperJSON.minesweeperIcons.yellow);
        MSCheckVictory();
    };
};