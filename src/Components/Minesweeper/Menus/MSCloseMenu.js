export default function MSCloseMenu(id) {
    document.getElementById("minesweeper-menus-area").classList.add("closed");
    if(id) {
        let menuToClose = document.getElementById(id);
        if(menuToClose) {
            if(!menuToClose.className.includes(`closed`)) {
                if(menuToClose.classList.length === 0) {
                    menuToClose.className = `closed`;
                } else {
                    menuToClose.classList.add(`closed`);
                }
            }
        }
    }
};