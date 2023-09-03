import getCount from "./getCount";
import sortArray from "./sortArray";
import minesweeperJSON from "../../Settings/minesweeper.json";

export default function setNumbers(y, x) {
    let sqs = document.getElementsByClassName("squares");
    let squaresPos = [];
    for(let sq of sqs) {
        let splitted = sq.className.trim().split(" ");
        let squareId = document.getElementsByClassName(splitted[1])[0].id;
        if(minesweeperJSON.bombsPlaces.includes(parseInt(squareId))) {
            squaresPos.push(splitted[1]);
        };
    };
    let positionsToMarkAsNumbers = [];
    for(let squarePosition of squaresPos) {
        let squarePosSplitted = squarePosition.split("x");
        let sqY = parseInt(squarePosSplitted[0]);
        let sqX = parseInt(squarePosSplitted[1]);
        let searchParameters = [
            `${sqY-1}x${sqX-1}`,
            `${sqY-1}x${sqX}`,
            `${sqY-1}x${sqX+1}`,
                
            `${sqY}x${sqX-1}`,
            `${sqY}x${sqX+1}`,
                
            `${sqY+1}x${sqX-1}`,
            `${sqY+1}x${sqX}`,
            `${sqY+1}x${sqX+1}`,
        ];
        let totalBombsFoundInArea = 0, foundNumber;
        for(let search of searchParameters) {
            if(squaresPos.indexOf(search) > -1) {
                totalBombsFoundInArea++;
            } else {
                if(document.getElementsByClassName(search)[0]) {
                    foundNumber = document.getElementsByClassName(search)[0];  
                    positionsToMarkAsNumbers.push(search);
                }
            };
        };
    };
    for(let posToMark of positionsToMarkAsNumbers) {
        let timesMarked = getCount(positionsToMarkAsNumbers, posToMark);
        let posToChangeColor = document.getElementsByClassName(posToMark)[0];
        if(timesMarked === 1) {
            minesweeperJSON.numbers1.push(posToChangeColor.id);
            //posToChangeColor.style.backgroundColor = "#00f";
        } else if(timesMarked === 2) {
            minesweeperJSON.numbers2.push(posToChangeColor.id);
            //posToChangeColor.style.backgroundColor = "#0f0";
        } else if(timesMarked === 3) {
            minesweeperJSON.numbers3.push(posToChangeColor.id);
            //posToChangeColor.style.backgroundColor = "#f00";
        } else if(timesMarked === 4) {
            minesweeperJSON.numbers4.push(posToChangeColor.id);
            //posToChangeColor.style.backgroundColor = "#f0f";
        } else if(timesMarked === 5) {
            minesweeperJSON.numbers5.push(posToChangeColor.id);
            //posToChangeColor.style.backgroundColor = "#ff0";
        } else if(timesMarked === 6) {
            minesweeperJSON.numbers6.push(posToChangeColor.id);
            //posToChangeColor.style.backgroundColor = "#0ff";
        } else if(timesMarked === 7) {
            minesweeperJSON.numbers7.push(posToChangeColor.id);
            //posToChangeColor.style.backgroundColor = "#0ff";
        };
    };
    sortArray(minesweeperJSON.freePlaces);
    sortArray(minesweeperJSON.numbers1);
    sortArray(minesweeperJSON.numbers2);
    sortArray(minesweeperJSON.numbers3);
    sortArray(minesweeperJSON.numbers4);
    sortArray(minesweeperJSON.numbers5);
    sortArray(minesweeperJSON.numbers6);
};