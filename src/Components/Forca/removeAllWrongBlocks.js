export default function removeAllWrongBlocks() {
    for(let wrongBlock of document.querySelectorAll(".wrong-blocks")) {
        wrongBlock.remove();
    }
}