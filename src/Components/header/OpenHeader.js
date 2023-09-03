export default function OpenHeader() {
    const headerDiv = document.querySelector("#gamecenter-header");
    const navCloseArrow = document.querySelector("#nav-close-arrow");
    if(headerDiv) {
        headerDiv.classList.remove("closed");
        if(navCloseArrow) {
            navCloseArrow.classList.remove("closed");
        };
    };
};