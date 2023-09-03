import SSJSON from "../../Settings/spaceshooter.json";

export default function removePlayers() {
    for(let player of document.querySelectorAll(".ss-players")) {
        player.remove();
    };
};