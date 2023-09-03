import SSJSON from "../../Settings/spaceshooter.json";

export default function shotDelay(index) {
    let rechargeBar = document.getElementById(`ss-recharge-${index}`);
    SSJSON.players[index].shotStop = true;
    rechargeBar.classList.add("recharging");

    rechargeBar.style.animation = `SSrecharging ${SSJSON.players[index].shotDelay}s linear 1`;

    setTimeout(function() {
        SSJSON.players[index].shotStop = false;
        rechargeBar.classList.remove("recharging");
        rechargeBar.style.animation = `none`;
    }, SSJSON.players[index].shotDelay * 1000);
};