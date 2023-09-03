import SSJSON from "../../Settings/spaceshooter.json";
import checkMission from "./checkMission";

export default function rivalsAdvanceLoop() {
    let mission = SSJSON.missions[SSJSON.currentMission];

    let raceAdvanceInterval = setInterval(function() {
        if(SSJSON.freeze === true) {
            clearInterval(raceAdvanceInterval);
            return;
        };
        if(SSJSON.missions[SSJSON.currentMission].isRunning !== true) {
            clearInterval(raceAdvanceInterval);
            return;
        };
        let delayDuration = 0.5;
        for(let rival of document.getElementsByClassName("ss-rivals")) {
            let oldTop = parseInt(rival.style.top.slice(0, -2));
            rival.style.transitionDuration = `${delayDuration}s`;
            rival.style.transitionTimingFunction = `linear`;
            rival.style.top = `${oldTop - 1}px`;
            setTimeout(function() {
                rival.style.removeProperty("transition-duration");
                rival.style.removeProperty("transition-timing-function");
            }, delayDuration * 1000);
        };

    }, 1000 / mission.raceSpeed);
};