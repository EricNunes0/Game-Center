import audio from "../../Functions/audios";


export default function logoAnimation() {
    audio("Audios/space/snd_title.mp3", 7);
    let animationDuration = 5;
    const logoArea = document.querySelector("#ss-game-logo-area");
    const logoDiv = document.querySelector("#ss-game-logo-div");
    const logo = document.querySelector("#ss-game-logo");
    logoArea.classList.remove("closed");
    logoDiv.classList.add("running");
    logo.classList.add("hide");
    setTimeout(function() {
        logo.classList.remove("hide");
        logo.classList.add("running");
    }, 2 * 1000);
    setTimeout(function() {
        logoArea.classList.add("closed");
        logoDiv.classList.remove("running");
        logo.classList.remove("running");
    }, animationDuration * 1000);
};