import SSJSON from "../../Settings/spaceshooter.json";
import checkMission from "./checkMission";

export default function raceAdvanceLoop() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    const missionText = document.getElementById("ss-mission-text");

    let raceAdvanceInterval = setInterval(function() {
        if(SSJSON.freeze === true) {
            console.error("Race loop desativado!");
            clearInterval(raceAdvanceInterval);
            return;
        };
        if(SSJSON.missions[SSJSON.currentMission].isRunning !== true) {
            console.error("Race loop running desativado!");
            clearInterval(raceAdvanceInterval);
            return;
        };
        const raceBar = document.getElementById("ss-race-bar");
        SSJSON.players[0].meters++;
        missionText.innerText = `${SSJSON.players[0].meters}/${mission.raceMeters}`;
        let percent = parseInt((SSJSON.players[0].meters / mission.raceMeters) * 100);
        raceBar.style.backgroundSize = `100% ${percent}%`;

        if(SSJSON.players[0].meters >= mission.raceMeters) {
            checkMission();
        };

    }, 1000 / mission.raceSpeed);
};