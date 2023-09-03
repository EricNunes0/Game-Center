import gameStats from "../../Settings/gameStats.json";

export default function victoryConfig(player) {
    if(player === 1) {
        gameStats.player1.points = gameStats.player1.points + 1;
        document.getElementById("tictactoe-game-main").style.backgroundColor = gameStats.player1.color;
        document.getElementById("p1").innerText = gameStats.player1.points;
    } else if(player === 2) {
        gameStats.player2.points = gameStats.player2.points + 1;
        document.getElementById("tictactoe-game-main").style.backgroundColor = gameStats.player2.color;
        document.getElementById("p2").innerText = gameStats.player2.points;
    };
    for(let i = 0; i <= gameStats.places.length - 1; i++) {
        let btn = document.getElementById("ttt-" + parseInt(i + 1));
        btn.disabled = true;
        if(gameStats.places[i] === player) {
            btn.className = btn.className.replace("default", "win");
        }
    };
    return;
}