import SSJSON from "../../Settings/spaceshooter.json";

export default function resetPoints() {
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        SSJSON.players[i].points = 0;
        let pointsText = document.getElementById(`ss-points-${i}`);
        pointsText.innerText = SSJSON.players[i].points;
        pointsText.style.color = SSJSON.players[i].color;
    };
}