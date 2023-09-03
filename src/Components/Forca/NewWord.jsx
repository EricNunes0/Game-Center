import forcaJSON from "../../Settings/forca.json";
import setLettersRemaining from "./setLettersRemaining";
import typeEdit from "./typeEdit";
import ReactDomServer from 'react-dom/server';

export default function NewWord() {
    forcaJSON.lifes = 6;
    const newCategorie = forcaJSON.categoriesNames[Math.floor(Math.random() * forcaJSON.categoriesNames.length)];
    const newWord = forcaJSON.categories[newCategorie][Math.floor(Math.random() * forcaJSON.categories[newCategorie].length)];
    forcaJSON.categorieSelected = newCategorie;
    typeEdit();
    const wordSplit = newWord.trim().split("");
    forcaJSON.wordLetters = wordSplit;
    setLettersRemaining(wordSplit);
    let letterBlocks = [], pos = 0;
    for(let letter of wordSplit) {
        letterBlocks.push(createLetterBlock(letter, pos));
        pos++;
    };
    let letterBlocksFlex = document.getElementById("letter-blocks-flex");
    if(!letterBlocksFlex) {
        return (
            <div id = "letter-blocks-flex">
                {letterBlocks}
            </div>
        )
    } else {
        letterBlocksFlex.innerHTML = ReactDomServer.renderToString(letterBlocks);
    };
};

function createLetterBlock(letter, pos) {
    const isAlpha = /^[a-zA-Zç]+$/.test(letter);
    if(isAlpha === true) {
        return (
            <div className = {`letter-blocks ${forcaJSON.theme}`} key = {`${letter}-${pos}`}>
                <span className = {`block-letters ${forcaJSON.theme}`}></span>
            </div>
        )
    } else {
        return (
            <div className = "empty-blocks" key = {`empty-${pos}`}></div>
        )
    };
}