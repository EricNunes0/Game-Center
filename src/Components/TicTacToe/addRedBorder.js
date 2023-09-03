export default function addRedBorder(value) {
    console.log("addRedBoarder, value:", value);
    document.getElementById(`ttt-${value}`).style.border = `2px solid #f00`;
}