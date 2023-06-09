const colorBtn = document.querySelector("#color-button");
const colorsFlex = document.querySelector("#colors-flex");
const colorP1 = document.querySelector("#color-p1");
const colorP2 = document.querySelector("#color-p2");

function colorMenu() {
    let pageColor = document.getElementById("colors").value;
    if(pageColor == `closed`) {
        let checkIfOpened = document.getElementById("controls").value;
        if(checkIfOpened == `opened`) {
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

colorBtn.addEventListener("click", function() {
    colorMenu();
});

colorP1.addEventListener("change", function() {
    let val = document.getElementById("color-p1").value;
    document.getElementById("p1-area").style.backgroundColor = val;
    if(document.getElementById("player-span-1")) {
        document.getElementById("player-span-1").style.color = val;
    };
    editPlayerColor(1, val);
});

colorP2.addEventListener("change", function() {
    let val = document.getElementById("color-p2").value;
    document.getElementById("p2-area").style.backgroundColor = val;
    if(document.getElementById("player-span-2")) {
        document.getElementById("player-span-2").style.color = val;
    };
    editPlayerColor(2, val);
});