import audio from "../../Functions/audios";

export default function createDeathFragments(index) {
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;
    
    const player = document.getElementById(`ss-player-${index}`);
    const playerOffsets = player.getBoundingClientRect();
    const playerTop = playerOffsets.top - gameAreaTop;
    const playerLeft = playerOffsets.left - gameAreaLeft;
    const playerWidth = playerOffsets.width;
    const playerHeight = playerOffsets.height;

    const fragmentCount = 8;
    const fragmentsDuration = 0.7;
    const fragmentsIterationCount = 2;

    audio("../../Audios/space/snd_death(0).mp3", 1.6);
    for(let i = 0; i <= fragmentCount - 1; i++) {
        let fragment = document.createElement("div");
        fragment.className = `ss-explosion-fragments`;
        fragment.style = `
            top: ${playerTop + (playerHeight / 2)}px;
            left: ${playerLeft + (playerWidth / 2)}px;
            width: 15px;
            height: 15px;
            background-image: url("https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/dbd0830e0bd6675.png");
            animation: ExplosionFragment${i} ${fragmentsDuration}s linear ${fragmentsIterationCount};
        `;
        gameArea.appendChild(fragment);
    }

    setTimeout(function() {
        document.querySelectorAll(".ss-explosion-fragments").forEach((exp) => exp.remove());
    }, (fragmentsDuration * fragmentsIterationCount) * 1000);
};