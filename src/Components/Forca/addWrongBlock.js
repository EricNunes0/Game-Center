import forcaJSON from "../../Settings/forca.json";

export default function addWrongBlock(letter) {
    const forcaWrongBlocksDiv = document.getElementById("forca-wrong-blocks-div");
    if(forcaWrongBlocksDiv) {
        let wrongBlock = document.createElement("div");
        wrongBlock.className = `wrong-blocks ${forcaJSON.theme}`;
        wrongBlock.id = `wrong-block-${letter}`;
        wrongBlock.textContent = letter.toLocaleUpperCase();

        forcaWrongBlocksDiv.appendChild(wrongBlock);
    };
}