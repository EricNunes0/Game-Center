import gameStats from "../../Settings/gameStats.json";

export default function resetPoints() {
    gameStats.player1.points = 0;
    gameStats.player2.points = 0;
    document.getElementById("p1").innerText = gameStats.player1.points;
    document.getElementById("p2").innerText = gameStats.player2.points;
    document.getElementById("tictactoe-game-main").style.backgroundColor = "#30ffa0";
};