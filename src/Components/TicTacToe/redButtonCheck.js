import gameStats from "../../Settings/gameStats.json";

export default function redButtonCheck(value) {
    document.getElementById("ttt-" + value).className = document.getElementById("ttt-" + value).className.replace("gray", "red");
    document.getElementById("ttt-" + value).style.backgroundColor = gameStats.player2.color;
}