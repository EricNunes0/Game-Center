import SSJSON from "../../Settings/spaceshooter.json";

export default function addShots(index, n) {
    SSJSON.players[index].shots += n;
    let counter = document.getElementById(`ss-shots-counter-${index}`);
    counter.innerText = SSJSON.players[index].shots;
};