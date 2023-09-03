export default function enableLevelButtons() {
    for(let button of document.querySelectorAll(".level-select-buttons")) {
        button.disabled = false;
    };
};