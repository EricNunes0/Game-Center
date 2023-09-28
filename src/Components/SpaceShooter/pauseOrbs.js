export default function pauseOrbs(boolean) {
    let orbs = document.querySelectorAll(".ss-orbs");
    if(boolean === true) {
        for(let orb of orbs) {
            orb.style.animationPlayState = "paused";
        }
    } else {
        for(let orb of orbs) {
            orb.style.animationPlayState = "running";
        }
    };
};