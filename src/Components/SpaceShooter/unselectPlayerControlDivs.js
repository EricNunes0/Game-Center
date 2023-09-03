export default function unselectPlayerControlDivs() {
    for(let button of document.querySelectorAll(".ss-player-control-divs")) {
        button.classList.remove(`selected`);
    };
};