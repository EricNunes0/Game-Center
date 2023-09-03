import minesweeperJSON from "../../Settings/minesweeper.json";
import setBombs from "./setBombs";

export default function resetGame() {
    let y = minesweeperJSON.height;
    let x = minesweeperJSON.width;
    console.log(`resetGame(${y}, ${x})`);
    minesweeperJSON.explodeBombHandler = false;
    minesweeperJSON.bombsPlaces = [];
    minesweeperJSON.numbers1 = [];
    minesweeperJSON.numbers2 = [];
    minesweeperJSON.numbers3 = [];
    minesweeperJSON.numbers4 = [];
    minesweeperJSON.numbers5 = [];
    minesweeperJSON.numbers6 = [];
    minesweeperJSON.numbers7 = [];
    let squares = document.getElementsByClassName("squares");
    for(let square of squares) {
        if(square.className.includes("active")) {
            square.classList.toggle("active");
        };
        if(square.className.includes("number1")) {
            square.classList.toggle("number1");
        };
        if(square.className.includes("number2")) {
            square.classList.toggle("number2");
        };
        if(square.className.includes("number3")) {
            square.classList.toggle("number3");
        };
        if(square.className.includes("number4")) {
            square.classList.toggle("number4");
        };
        if(square.className.includes("number5")) {
            square.classList.toggle("number5");
        };
        if(square.className.includes("number6")) {
            square.classList.toggle("number6");
        };
        if(square.className.includes("number7")) {
            square.classList.toggle("number7");
        };
        if(square.className.includes("number8")) {
            square.classList.toggle("number8");
        };
        if(square.className.includes("bomb")) {
            square.classList.toggle("bomb");
        };
        if(square.className.includes("flag")) {
            square.classList.toggle("flag");
        };
        if(square.className.includes("disabled")) {
            square.classList.toggle("disabled");
        };
        if(square.className.includes("flower")) {
            square.classList.toggle("flower");
        };
    };
    document.getElementById("alert").innerText = `${y}x${x}`;
    setBombs(y, x);
};