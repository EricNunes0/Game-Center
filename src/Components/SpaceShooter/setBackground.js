import SSJSON from "../../Settings/spaceshooter.json";

export default function setBackground() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    const canvas = document.querySelector("#space-shooter-canvas");
    canvas.style.backgroundImage = `url("${mission.cenary}")`;
};