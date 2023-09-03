import forcaJSON from "../../Settings/forca.json";
import addWrongBlock from "./addWrongBlock";
import checkForcaLifes from "./checkForcaLifes";
import checkVictory from "./checkVictory";
import defeatEvent from "./defeatEvent";

export default function ToggleButton(id) {
    let button = document.getElementById(id);
    if(button) {
        if(forcaJSON.lifes > 0) {
            if(button.classList.contains("disabled")) {return;};
            button.classList.add("disabled");
            if(forcaJSON.wordLetters.includes(button.id.toLocaleLowerCase())) {
                let index = 0;
                for(let letter of forcaJSON.wordLetters) {
                    const isAlpha = /^[a-zA-Zç]+$/.test(letter);
                    if(isAlpha === true) {
                        if(button.id.toLocaleLowerCase() === letter.toLocaleLowerCase()) {
                            document.getElementsByClassName("letter-blocks")[index].innerHTML = letter.toLocaleUpperCase();
                            forcaJSON.lettersRemaining--;
                        }
                        index++;
                    };
                };
            } else {
                if(forcaJSON.lifes > 0) {
                    forcaJSON.lifes -= 1;
                    checkForcaLifes(forcaJSON.lifes);
                    addWrongBlock(id);
                    //Adicionar bloco
                };
            };
            checkVictory();
            if(forcaJSON.lifes === 0) {
                defeatEvent();
            };
        };
    };
};