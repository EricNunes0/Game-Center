import forcaJSON from "../../Settings/forca.json";
import ToggleButton from "./ToggleButton";
import isAlpha from "./isAlpha";

export default async function forcaTipUse() {
    let tips = forcaJSON.tips;
    const tipCounter = document.getElementById("forca-item-tip-counter");
    if(tips > 0) {
        forcaJSON.tips--;
        tipCounter.innerText = forcaJSON.tips;
        let tipWordSelected = generateRandomLetterTip(forcaJSON.wordLetters);
        ToggleButton(tipWordSelected.toLocaleUpperCase());
    } else {
        let tipButton = document.getElementById("forca-item-tip-button");
        tipButton.classList.add("error");
        setTimeout(function() {
            tipButton.classList.remove("error");
        }, 300);
    };
}

function generateRandomLetterTip(words) {
    let tipWordSelected = words[Math.floor(Math.random() * words.length)].toLocaleUpperCase();
    let letterBlocks = document.getElementsByClassName(`letter-blocks`);
    let existLetters = [];
    for(const letterBlock of letterBlocks) {
        if(isAlpha(letterBlock.textContent) === true) {
            existLetters.push(letterBlock.textContent);
        };
    };
    while((existLetters.includes(tipWordSelected))) {
        tipWordSelected = words[Math.floor(Math.random() * words.length)].toLocaleUpperCase();
    }
    return tipWordSelected;
}