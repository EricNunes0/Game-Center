export default function TTTChangeTheme() {
    let val = document.getElementById("theme").value;
    console.log(val)
    let oldTheme, newTheme, themeIconURL;
    if(val === `light`) {
        oldTheme = `light`;
        newTheme = `dark`;
        themeIconURL = `https://i.imgur.com/n68qj9b.png`;
    } else {
        oldTheme = `dark`;
        newTheme = `light`;
        themeIconURL = `https://i.imgur.com/EFjsg8D.png`;
    }
    document.getElementById("theme").value = newTheme;


    for(let themeChange of document.querySelectorAll(`.${oldTheme}`)) {
        themeChange.className = themeChange.className.replace(oldTheme, newTheme);
    }
};