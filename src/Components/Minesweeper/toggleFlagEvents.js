import minesweeperJSON from "../../Settings/minesweeper.json";

export default function toggleFlagEvents() {
    let squares = document.getElementsByClassName('squares');
    for(let square of squares) {
        square.addEventListener("contextmenu", function(ev) {
            if(ev.target.className.includes("active")) {
                return;
            }
            if(ev.target.className.includes("flag")) {
                minesweeperJSON.bandeiras = minesweeperJSON.bandeiras + 1;
            } else {
                if(minesweeperJSON.bandeiras <= 0) {return;};
                minesweeperJSON.bandeiras = minesweeperJSON.bandeiras - 1;
            };
            ev.target.classList.toggle("flag");
            document.getElementById("bandeiras-count").innerText = minesweeperJSON.bandeiras;
        });
    }
};