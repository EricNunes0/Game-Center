export default function disableLevelButtons() {
    for(let button of document.querySelectorAll(".level-select-buttons")) {
        button.disabled = true;
    };
};