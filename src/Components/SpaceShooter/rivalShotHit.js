import SSJSON from "../../Settings/spaceshooter.json";

export default function rivalShotHit(rival) {
    let mission = SSJSON.missions[SSJSON.currentMission];
    let delayDuration = 0.5;
    if(rival) {
        let oldTop = parseInt(rival.style.top.slice(0, -2));
        rival.style.transitionDuration = `${delayDuration}s`;
        rival.style.transitionTimingFunction = `linear`;
        rival.style.top = `${oldTop + 100}px`;
        setTimeout(function() {
            rival.style.removeProperty("transition-duration");
            rival.style.removeProperty("transition-timing-function");
        }, delayDuration * 1000);
    }
};