import colorMenu from "./colorMenu";

export default function helpMenu() {
    let checkIfOpened = document.getElementById("controls").value;
    if(checkIfOpened === `closed`) {
        let pageColor = document.getElementById("colors").value;
        if(pageColor === `opened`) {
            colorMenu();
        }
        document.getElementById("controls").value = `opened`;
        document.getElementById("controls-main").className = document.getElementById("controls-main").className.replace("closed", "closing");
        setTimeout(function() {
            document.getElementById("controls-main").className = document.getElementById("controls-main").className.replace("closing", "opened")
        }, 100);
    } else {
        document.getElementById("controls").value = `closed`;
        document.getElementById("controls-main").className = document.getElementById("controls-main").className.replace("opened", "closing");
        setTimeout(function() {
            document.getElementById("controls-main").className = document.getElementById("controls-main").className.replace("closing", "closed")
        }, 100);
    }
}