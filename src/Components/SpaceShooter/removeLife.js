import SSJSON from "../../Settings/spaceshooter.json";
import audio from "../../Functions/audios";
import defeatPlayer from "./defeatPlayer";
import playerHitAnimation from "./playerHitAnimation";

export default function removeLife(index) {
    SSJSON.players[index].lifes--;
    playerHitAnimation(index);
    audio("../../Audios/space/snd_hit(0).mp3", 2);
    let lifeToRemove = document.getElementById(`ss-lifes-${index}`);
    if(lifeToRemove) {
        lifeToRemove.remove();
    };
    if(SSJSON.players[index].lifes <= 0) {
        defeatPlayer(index);
    };
};