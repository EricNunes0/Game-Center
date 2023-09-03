export default function disableAllSpaces() {
    let squares = document.getElementsByClassName("squares");
    for(let square of squares) {
        square.classList.toggle("disabled");
    };
}