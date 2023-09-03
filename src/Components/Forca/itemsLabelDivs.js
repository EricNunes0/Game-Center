export default function itemsLabelDivs() {
    for(let itemsDivsFlex of document.querySelectorAll(".forca-items-divs-flex")) {
        let hiddenDiv = itemsDivsFlex.querySelector(".forca-items-hidden-divs");
        itemsDivsFlex.addEventListener("mouseenter", () => {
            hiddenDiv.classList.remove("closed");
        });
        itemsDivsFlex.addEventListener("mouseleave", () => {
            hiddenDiv.classList.add("closed");
        });
    }
}