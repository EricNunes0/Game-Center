import SSJSON from "../../Settings/spaceshooter.json";

export default function resetShots() {
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        SSJSON.players[i].shots = 20;
        let counter = document.getElementById(`ss-shots-counter-${i}`);
        counter.innerText = SSJSON.players[i].shots;
        counter.style.color = SSJSON.players[i].color;
    };
};