import SSJSON from "../../Settings/spaceshooter.json";
import CreateWeaponHud from "./CreateWeaponHud";

export default function resetLifes() {
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        SSJSON.players[i].lifes = SSJSON.players[i].lifesMax;
    };
    CreateWeaponHud();
}