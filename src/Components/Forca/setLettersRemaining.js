import isAlpha from "./isAlpha";
import forcaJSON from "../../Settings/forca.json";

export default function setLettersRemaining(letters) {
    forcaJSON.lettersRemaining = 0;
    for(let letter of letters) {
        if(isAlpha(letter) === true) {
            forcaJSON.lettersRemaining++;
        };
    };
};