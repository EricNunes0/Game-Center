import ToggleButton from "./ToggleButton";

export default function ToggleKeyButtons() {
    for(let button of document.querySelectorAll(".forca-tecla-buttons")) {
        button.addEventListener("click", () => {
            ToggleButton(button.id);
        });
    }
};