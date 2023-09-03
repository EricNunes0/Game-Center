import helpMenu from "./helpMenu";

export default function colorMenu() {
    let pageColor = document.getElementById("colors").value;
    if(pageColor === `closed`) {
        let checkIfOpened = document.getElementById("controls").value;
        if(checkIfOpened === `opened`) {
            helpMenu();
        }
        document.getElementById("colors").value = `opened`;
        document.getElementById("colors-main").className = document.getElementById("colors-main").className.replace("closed", "closing");
        setTimeout(function() {
            document.getElementById("colors-main").className = document.getElementById("colors-main").className.replace("closing", "opened")
        }, 100);
    } else {
        document.getElementById("colors").value = `closed`;
        document.getElementById("colors-main").className = document.getElementById("colors-main").className.replace("opened", "closing");
        setTimeout(function() {
            document.getElementById("colors-main").className = document.getElementById("colors-main").className.replace("closing", "closed")
        }, 100);
    }
}