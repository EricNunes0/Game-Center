import minesweeperJSON from "../../Settings/minesweeper.json";

export default function checkProxs(id) {
    let mainSquare = document.getElementById(id);
    let mainSquarePos = mainSquare.classList[1];
    let mainSquarePosSplit = mainSquarePos.split("x");
    let sqY = parseInt(mainSquarePosSplit[0]);
    let sqX = parseInt(mainSquarePosSplit[1]);
    let searchParameters = [
        //`${sqY-1}x${sqX-1}`,
        `${sqY-1}x${sqX}`,
        //`${sqY-1}x${sqX+1}`,
                
        `${sqY}x${sqX-1}`,
        `${sqY}x${sqX+1}`,
                
        //`${sqY+1}x${sqX-1}`,
        `${sqY+1}x${sqX}`,
        //`${sqY+1}x${sqX+1}`,
    ];
    for(let search of searchParameters) {
        if(document.getElementsByClassName(search)[0]) {
            let posToCheck = document.getElementsByClassName(search)[0];
            if(
                (!minesweeperJSON.numbers1.includes(posToCheck.id)) && (!minesweeperJSON.numbers2.includes(posToCheck.id)) &&
                (!minesweeperJSON.numbers3.includes(posToCheck.id)) && (!minesweeperJSON.numbers4.includes(posToCheck.id)) &&
                (!minesweeperJSON.numbers5.includes(posToCheck.id)) && (!minesweeperJSON.numbers6.includes(posToCheck.id)) &&
                (!minesweeperJSON.bombsPlaces.includes(posToCheck.id))
            ) {
                if((!posToCheck.className.includes("active")) && (!posToCheck.className.includes("flag"))) {
                    posToCheck.classList.toggle("active");
                    checkProxs(posToCheck.id);
                }
            };
        };
    }
};