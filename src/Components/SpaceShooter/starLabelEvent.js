export default function starLabelEvent() {
    const starDivs = document.querySelectorAll(".ss-stars-divs");
    for(let div of starDivs) {
        let starLabel = div.querySelector(".ss-stars-labels");
        div.addEventListener("mouseenter", function() {
            starLabel.classList.remove("closed");
        });
        div.addEventListener("mouseleave", function() {
            starLabel.classList.add("closed");
        });
    };
}