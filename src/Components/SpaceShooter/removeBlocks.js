export default function removeBlocks() {
    for(let block of document.querySelectorAll(".ss-blocks")) {
        block.remove();
    }
};