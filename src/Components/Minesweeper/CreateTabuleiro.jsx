import setBombs from "./setBombs";
import setNumbers from "./setNumbers";
import toggleActiveEvent from "./toggleActiveEvent";
import toggleFlagEvents from "./toggleFlagEvents";
import minesweeperJSON from "../../Settings/minesweeper.json";

function generateTableRows(y, x) {
    let rows = [];
    for(let j = 0; j <= x - 1; j++) {
        rows.push(generateTableDatas(y, j));
    };
    return (
        <tr className = "table-square-divs" key = {`${y}x${x}`}>
            {rows}
        </tr>
    )
}

function generateTableDatas(y, x) {
    minesweeperJSON.squaresPos += 1;
    return (
        <td id = {`pos-${parseInt(minesweeperJSON.squaresPos) - 1}`} key = {`${y}x${x}`}>
            <div className = {`squares ${y}x${x}`} id = {parseInt(minesweeperJSON.squaresPos) - 1} onClick = {() => toggleActiveEvent(y, x)}></div>
        </td>
    )
}

export default function CreateTabuleiro({y, x}) {
    let rows = [];
    for(let i = 0; i <= y - 1; i++) {
        rows.push(generateTableRows(i, x));
    };
    return (
        <tbody id = "table-square-container">
            {rows}
        </tbody>
    );
};