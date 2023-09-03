import gameStats from "../../Settings/gameStats.json";

export default function blueButtonCheck(value) {
    document.getElementById("ttt-" + value).className = document.getElementById("ttt-" + value).className.replace("gray", "blue");
    document.getElementById("ttt-" + value).style.backgroundColor = gameStats.player1.color;
}