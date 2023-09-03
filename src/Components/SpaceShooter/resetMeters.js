import SSJSON from "../../Settings/spaceshooter.json";

export default function resetMeters() {
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        SSJSON.players[i].meters = 0;
    };
}