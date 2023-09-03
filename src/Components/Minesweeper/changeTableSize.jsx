import toggleActiveEvent from "./toggleActiveEvent";
import minesweeperJSON from "../../Settings/minesweeper.json";
import React from "react";
import ReactDOMServer from "react-dom/server";

export default function changeTableSize(y, x) {
    console.log(y, x);
    const tbody = document.getElementById("table-square-container");
    tbody.innerHTML = "";
    minesweeperJSON.squaresPos = 0;
    minesweeperJSON.height = y;
    minesweeperJSON.width = x;
    let edittedTable = EditTabuleiro(y, x);
    let rendered = ReactDOMServer.renderToString(edittedTable);
    tbody.innerHTML = rendered;
    createHandler(y, x);
};

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
            <div className = {`squares ${y}x${x}`} id = {parseInt(minesweeperJSON.squaresPos) - 1}></div>
        </td>
    )
}

function EditTabuleiro(y, x) {
    console.log(`EditTabuleiro(${y}, ${x})`);
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

function createHandler(y, x) {
    let squares = document.getElementsByClassName("squares");
    for(let square of squares) {
        let squareClassList = square.classList[1].split("x");
        square.removeEventListener("click", () => {
            toggleActiveEvent(squareClassList[0], squareClassList[1]);
        });
        square.addEventListener("click", () => {
            toggleActiveEvent(squareClassList[0], squareClassList[1]);
        });
    }
}