import SSJSON from "../../Settings/spaceshooter.json";

export default function changeGun(player, index) {
    SSJSON.players[player].gun = index;


    const rechargeBar = document.getElementById(`ss-recharge-${player}`);
    for(let classObj of rechargeBar.classList) {
        if(classObj.startsWith(`shot`)) {
            rechargeBar.classList.remove(classObj);
        };
    };
    rechargeBar.classList.add(`shot-${index}`);
};