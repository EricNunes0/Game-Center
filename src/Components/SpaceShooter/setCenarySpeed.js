import SSJSON from "../../Settings/spaceshooter.json";

export default function setCenarySpeed() {
    let mission = SSJSON.missions[SSJSON.currentMission];

    if(mission.cenarySpeed) {
        document.getElementById("space-shooter-canvas").style.animationDuration = `${mission.cenarySpeed}s`;
    };
};