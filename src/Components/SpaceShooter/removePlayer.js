import createDeathFragments from "./createDeathFragments";

export default function removePlayer(index) {
    const player = document.getElementById(`ss-player-${index}`);
    if(player) {
        createDeathFragments(index);
        player.remove();
    };
}