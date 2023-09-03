import SSJSON from "../../Settings/spaceshooter.json";

export default function unlockLevel(id) {
    if(SSJSON.missions[id]) {
        SSJSON.missions[id].locked = false;
    };
};