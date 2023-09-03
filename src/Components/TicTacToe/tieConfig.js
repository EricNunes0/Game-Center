import gameStats from "../../Settings/gameStats.json";

export default function tieConfig() {
    gameStats.tieCount = gameStats.tieCount + 1;
    document.querySelector("#tictactoe-game-main").style.backgroundColor = "#a0a0a0";
    for(let i = 0; i <= gameStats.places.length - 1; i++) {
        let btn = document.getElementById("ttt-" + parseInt(i + 1));
        btn.disabled = true;
    };
}