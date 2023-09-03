import ToggleButton from "./ToggleButton";
import isAlpha from "./isAlpha";

export default function keyboardListener() {
    console.log("keyboardListener.js carregado");
    document.addEventListener("keydown", (e) => {
        let name = e.key.toLocaleUpperCase();
        switch(name) {
            default:
                if(isAlpha(name.toLocaleLowerCase()) === true) {
                    ToggleButton(name.toLocaleUpperCase());
                }
                break;
        }
    });
};