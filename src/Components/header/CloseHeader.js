export default function CloseHeader() {
    const headerDiv = document.querySelector("#gamecenter-header");
    const navCloseArrow = document.querySelector("#nav-close-arrow");
    if(headerDiv) {
        headerDiv.classList.add("closed");
        if(navCloseArrow) {
            navCloseArrow.classList.add("closed");
        };
    };
};