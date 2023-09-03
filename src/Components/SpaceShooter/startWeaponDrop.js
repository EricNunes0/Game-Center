import SSJSON from "../../Settings/spaceshooter.json";
import dropWeapon from "./dropWeapon";

export default function startWeaponDrop() {
    let currentMission = SSJSON.currentMission;
    let mission = SSJSON.missions[currentMission];

    if(mission.weapons) {
        setTimeout(function() {
            dropWeapon();
        }, 3000);
    };
};