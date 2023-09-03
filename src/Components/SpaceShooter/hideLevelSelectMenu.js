import disableLevelButtons from "./disableLevelButtons";

export default function hideLevelSelectMenu() {
    const selectMenu = document.querySelector("#ss-level-select-menu");
    selectMenu.classList.add("closed");
    disableLevelButtons();
};