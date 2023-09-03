export default function MSHudDivReveal() {
    const bombDiv = document.getElementById("bomb-div");
    const revealBombDiv = document.getElementById("reveal-bomb-div");
    const bandeiraDiv = document.getElementById("bandeira-div");
    const revealBandeiraDiv = document.getElementById("reveal-bandeira-div");
    bombDiv.addEventListener("mouseenter", function() {
        revealBombDiv.classList.remove("closed");
    });
    bombDiv.addEventListener("mouseleave", function() {
        revealBombDiv.classList.add("closed");
    });
    bandeiraDiv.addEventListener("mouseenter", function() {
        revealBandeiraDiv.classList.remove("closed");
    });
    bandeiraDiv.addEventListener("mouseleave", function() {
        revealBandeiraDiv.classList.add("closed");
    });
    for(let configDiv of document.getElementsByClassName("configurations-divs")) {
        const configButton = configDiv.querySelector(".configs-buttons");
        const configLabelDiv = configDiv.querySelector(".config-labels-divs");
        if(configLabelDiv) {
            configButton.addEventListener("mouseenter", function() {
                console.log("ENTROU")
                configLabelDiv.classList.remove("closed");
            });
            configButton.addEventListener("mouseleave", function() {
                configLabelDiv.classList.add("closed");
            });
        };
    }
}