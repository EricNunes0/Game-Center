export default function EnableAllKeys() {
    for(let button of document.querySelectorAll(".forca-tecla-buttons")) {
        button.classList.remove("disabled");
    }
}