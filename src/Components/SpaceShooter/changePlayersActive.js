import SSJSON from "../../Settings/spaceshooter.json";

export default function changePlayersActive() {
    const playersActiveButton = document.getElementById("ss-players-active-button");

    if(SSJSON.playersActive === 1) {
        SSJSON.playersActive = 2;
        playersActiveButton.innerText = `2 jogadores`;
        playersActiveButton.className = playersActiveButton.className.replace(`1p`, `2p`);
    } else if(SSJSON.playersActive === 2) {
        SSJSON.playersActive = 1;
        playersActiveButton.innerText = `1 jogador`;
        playersActiveButton.className = playersActiveButton.className.replace(`2p`, `1p`);
    }
};