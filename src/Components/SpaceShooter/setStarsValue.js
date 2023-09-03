import SSJSON from "../../Settings/spaceshooter.json";

export default function setStarsValue() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    const starLabels = document.querySelectorAll(".ss-stars-labels");
    for(let i = 0; i <= starLabels.length - 1; i++) {
        starLabels[i].innerHTML = mission.stars[i].pointsRequired;
    };
}