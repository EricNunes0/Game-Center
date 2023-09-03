export default function centralizePlayers() {
    const canvas = document.getElementById("space-shooter-canvas");
    const canvasOffsets = canvas.getBoundingClientRect();
    const canvasWidth = canvasOffsets.width - (4)/* Borda */;

    let players = document.querySelectorAll(".ss-players");
    let spacesWidth = canvasWidth / players.length;
    let halfs = [];
    for(let i = 0; i <= players.length - 1; i++) {
        let player = players[i];
        if(player) {
            let half = ((spacesWidth * (i + 1)) - (spacesWidth / 2)) - (parseInt(player.style.width.slice(0, -2)) / 2);
            halfs.push(half);
            player.style.left = `${half}px`;
        };
    }
};