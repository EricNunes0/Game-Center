import gameStats from "../../Settings/gameStats.json";

export default function editPlayerColor(player, color) {
    if(player === 1) {
        gameStats.player1.color = color;
        let btns = document.querySelectorAll(".ttt-buttons");
        for(let i = 0; i <= btns.length - 1; i++) {
            if(btns[i].className.includes("blue")) {
                btns[i].style.backgroundColor = `${color}`;
            };
        };
    } else if(player === 2) {
        gameStats.player2.color = color;
        let btns = document.querySelectorAll(".ttt-buttons");
        for(let i = 0; i <= btns.length - 1; i++) {
            if(btns[i].className.includes("red")) {
                btns[i].style.backgroundColor = `${color}`;
            };
        };
    };
}