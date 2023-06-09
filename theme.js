function changeTheme() {
    let val = document.getElementById("theme").value;
    console.log(val);
    let oldTheme, newTheme, themeIconURL;
    if(val == `light`) {
        oldTheme = `light`;
        newTheme = `dark`;
        themeIconURL = `https://i.imgur.com/n68qj9b.png`;
    } else {
        oldTheme = `dark`;
        newTheme = `light`;
        themeIconURL = `https://i.imgur.com/EFjsg8D.png`;
    }
    document.getElementById("theme").value = newTheme;
    document.getElementById("ttt-container").className = `ttt-containers ${newTheme}`;
    let themeIcon = document.getElementById("theme-icon");
    themeIcon.className = `theme-icons ${newTheme}`;
    themeIcon.src = themeIconURL;
    document.getElementById("help-icon").className = `help-icons ${newTheme}`;
    document.getElementById("sound-icon").className = `sound-icons ${newTheme}`;
    document.getElementById("color-icon").className = `color-icons ${newTheme}`;
    document.getElementById("controls-board").className = `controls-boards ${newTheme}`;
    let controlsImgs = document.getElementsByClassName(`controls-images`);
    for(let i = 0; i <= controlsImgs.length - 1; i++) {
        controlsImgs[i].className = controlsImgs[i].className.replace(`${oldTheme}`, `${newTheme}`);
    }
    let controlsTitles = document.getElementsByClassName(`controls-titles`);
    for(let i = 0; i <= controlsTitles.length - 1; i++) {
        controlsTitles[i].className = controlsTitles[i].className.replace(`${oldTheme}`, `${newTheme}`);
    }
    let controlsDescriptions = document.getElementsByClassName(`controls-descriptions`);
    for(let i = 0; i <= controlsDescriptions.length - 1; i++) {
        controlsDescriptions[i].className = controlsDescriptions[i].className.replace(`${oldTheme}`, `${newTheme}`);
    }
    document.getElementById("colors-board").className = `colors-boards ${newTheme}`;
    let colorsImgs = document.getElementsByClassName(`colors-images`);
    for(let i = 0; i <= colorsImgs.length - 1; i++) {
        colorsImgs[i].className = colorsImgs[i].className.replace(`${oldTheme}`, `${newTheme}`);
    }
    let colorsTitles = document.getElementsByClassName(`colors-titles`);
    for(let i = 0; i <= colorsTitles.length - 1; i++) {
        colorsTitles[i].className = colorsTitles[i].className.replace(`${oldTheme}`, `${newTheme}`);
    }
    let colorsDescriptions = document.getElementsByClassName(`colors-descriptions`);
    for(let i = 0; i <= colorsDescriptions.length - 1; i++) {
        colorsDescriptions[i].className = colorsDescriptions[i].className.replace(`${oldTheme}`, `${newTheme}`);
    }
    let buttons = document.getElementsByClassName("ttt-buttons");
    for(let i = 0; i <= buttons.length - 1; i++) {
        buttons[i].className = buttons[i].className.replace(`${oldTheme}`, `${newTheme}`);
    }
    document.getElementById("game-title").className = `game-titles ${newTheme}`;
    document.getElementById("game-mode").className = `game-modes ${newTheme}`;
    document.getElementById("alert-message").className = document.getElementById("alert-message").className.replace(`${oldTheme}`, `${newTheme}`);
    document.getElementById("reset-button").className = document.getElementById("reset-button").className.replace(`${oldTheme}`, `${newTheme}`);
    document.getElementById("clear-button").className = document.getElementById("clear-button").className.replace(`${oldTheme}`, `${newTheme}`);
};