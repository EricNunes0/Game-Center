import enableLevelButtons from "./enableLevelButtons";

export default function revealLevelSelectMenu() {
    const selectMenu = document.querySelector("#ss-level-select-menu");
    selectMenu.classList.remove("closed");
    enableLevelButtons();
};