import minesweeperJSON from "../../Settings/minesweeper.json";

function toggleThemes(elementId, oldTheme, newTheme) {
    document.getElementById(elementId).classList.toggle(oldTheme);
    document.getElementById(elementId).classList.toggle(newTheme);
};

export default function MSTheme() {
    let theme = minesweeperJSON.theme;
    let oldTheme, newTheme;
    if(theme === `light`) {
        oldTheme = `light`;
        newTheme = `dark`;
    } else if(theme === `dark`) {
        oldTheme = `dark`;
        newTheme = `light`;
    }
    minesweeperJSON.theme = newTheme;
    toggleThemes("game-div", oldTheme, newTheme);
    toggleThemes("title", oldTheme, newTheme);
    for(let configIcon of document.getElementsByClassName("configs-icons")) {
        toggleThemes(configIcon.id, oldTheme, newTheme);
    };
    for(let configIcon of document.getElementsByClassName("counts")) {
        toggleThemes(configIcon.id, oldTheme, newTheme);
    };
    toggleThemes("alert", oldTheme, newTheme);
}