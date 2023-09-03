import SSJSON from "../../Settings/spaceshooter.json";

export default function changeMission(id) {
    console.log(id)
    if(id !== undefined && id !== null) {
        SSJSON.currentMission = id;
    };
};