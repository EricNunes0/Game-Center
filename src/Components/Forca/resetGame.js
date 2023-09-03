import EnableAllKeys from "./EnableAllKeys";
import NewWord from "./NewWord";
import editForcaSVG from "./editForcaSVG";
import removeAllWrongBlocks from "./removeAllWrongBlocks";

export default function resetGame() {
    document.getElementById("forca-message-area").classList.add("closed");
    document.getElementById("forca-defeat-message").classList.add("closed");
    document.getElementById("forca-victory-message").classList.add("closed");
    NewWord();
    EnableAllKeys();
    editForcaSVG(0);
    removeAllWrongBlocks();
};