export default function MSOpenMenu(id) {
    document.getElementById("minesweeper-menus-area").classList.remove("closed");
    let menuToOpen = document.getElementById(id);
    if(menuToOpen) {
        if(menuToOpen.className.includes(`closed`)) {
            menuToOpen.classList.remove(`closed`);
        }
    }
}