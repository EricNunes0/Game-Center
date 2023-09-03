import minesweeperJSON from "../../Settings/minesweeper.json";

export default function setEmpty(y, x) {
    let pos = 0;
    for(let i = 0; i <= y - 1; i++) {
        for(let j = 0; j <= x - 1; j++) {
            minesweeperJSON.freePlaces.push(pos);
            pos++;
        };
    };
};