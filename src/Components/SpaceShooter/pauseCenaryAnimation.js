export default function pauseCenaryAnimation(boolean) {
    let canvas = document.querySelector("#space-shooter-canvas");
    if(boolean === true) {
        canvas.style.animationPlayState = "paused";
        pauseScenaryFrames(true);
    } else {
        canvas.style.animationPlayState = "running";
        pauseScenaryFrames(false);
    };
};

function pauseScenaryFrames(boolean) {
    const frames = document.querySelectorAll(".ss-scenary-frames");
    for(const frame of frames) {
        if(boolean === true) {
            frame.style.animationPlayState = "paused";
        } else {
            frame.style.animationPlayState = "running";
        };
    };
};