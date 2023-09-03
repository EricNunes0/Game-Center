import setEmpty from "./setEmpty";
import setNumbers from "./setNumbers";
import minesweeperJSON from "../../Settings/minesweeper.json";

export default function setBombs(y, x) {
    console.log(`setBombs(${y}, ${x})`)
    setEmpty(y, x);
    let totalPlaces = parseInt(y * x);
    let totalBombs = parseInt(totalPlaces / 5);
    console.log(`Tabuleiro ${y}x${x} (${totalPlaces} blocos) criado! ${totalBombs} bombas adicionadas`);
    document.getElementById("bombas-count").innerText = totalBombs;
    minesweeperJSON.bandeiras = totalBombs;
    document.getElementById("bandeiras-count").innerText = totalBombs;
    for(let i = 0; i <= totalBombs - 1; i++) {
        let randomPlace = Math.floor(Math.random() * totalPlaces);
        while(minesweeperJSON.bombsPlaces.includes(randomPlace) === true) {
            randomPlace = Math.floor(Math.random() * totalPlaces);
        };
        minesweeperJSON.bombsPlaces.push(randomPlace);
        minesweeperJSON.freePlaces.splice(minesweeperJSON.freePlaces.indexOf(randomPlace), 1);
    };
    for(let bombPlaces of minesweeperJSON.bombsPlaces) {
        //document.getElementById(`${bombPlaces}`).style.backgroundColor = "#000";
    };
    setNumbers(y, x);
}