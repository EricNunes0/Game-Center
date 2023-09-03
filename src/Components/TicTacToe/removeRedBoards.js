export default function removeRedBorders() {
    for(let i = 1; i <= 9; i++) {
        document.getElementById(`ttt-${i}`).style.removeProperty("border");
    };
};