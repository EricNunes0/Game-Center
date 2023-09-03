import SSJSON from "../../Settings/spaceshooter.json";

export default function movePlayer(index, pos) {
    if(SSJSON.freeze === true) {
        return;
    };
    if(SSJSON.freezeMovesOnly === true) {
        return;
    };
    const player = document.getElementById(`ss-player-${index}`);
    if(player) {
        const moveSize = 20;
        let oldPos = player.style.left.slice(0, -2);
        switch(pos) {
            case "left":
                const moveLeftPos = (parseInt(oldPos) - moveSize);
                if(moveLeftPos >= 0) {
                    player.style.left = `${moveLeftPos}px`;
                };
                break;
            case "right":
                const moveRightPos = (parseInt(oldPos) + moveSize);
                const areaWidth = document.getElementById("ss-game-area").offsetWidth;
                if(moveRightPos < areaWidth - moveSize) {
                    player.style.left = `${moveRightPos}px`;
                };
                break;
            default:
                break;
        };
    };
};