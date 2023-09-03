import SSJSON from "../../Settings/spaceshooter.json";

export default function checkLevelSelectButtons() {
    let missions = SSJSON.missions;
    for(let mission of missions) {
        let selectButton = document.getElementById(`level-select-button-${mission.id}`);
        if(mission.locked === true) {
            selectButton.classList.add("closed");
        } else {
            selectButton.classList.remove("closed");
        }
    };
};