import gameStats from "../../Settings/gameStats.json";

export default function changeTurnAlert(player) {
    let playerColor = player === 1 ? gameStats.player1.color : gameStats.player2.color;
    document.getElementById("alert-message").innerHTML = `É a vez do <span class = "player-spans" id = "player-span-${player}" style = "color: ${playerColor};">jogador ${player}</span>`;
};