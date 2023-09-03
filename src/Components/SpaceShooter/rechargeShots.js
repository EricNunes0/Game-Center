import SSJSON from "../../Settings/spaceshooter.json";

export default function rechargeShots(player) {
    SSJSON.players[player].shots = SSJSON.guns[SSJSON.players[player].gun].shotRecharge;
    document.getElementById(`ss-shots-counter-${player}`).innerText = SSJSON.players[player].shots;
};