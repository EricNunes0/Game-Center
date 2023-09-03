export default function pauseCenaryAnimation(boolean) {
    let canvas = document.querySelector("#space-shooter-canvas");
    if(boolean === true) {
        canvas.style.animationPlayState = "paused";
    } else {
        canvas.style.animationPlayState = "running";
    };
};