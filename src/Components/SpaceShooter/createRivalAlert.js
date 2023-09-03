export default function createRivalAlert(rival, delay) {
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    const rivalOffsets = rival.getBoundingClientRect();
    const rivalTop = rivalOffsets.top - gameAreaTop;
    const rivalLeft = rivalOffsets.left - gameAreaLeft;
    const rivalWidth = parseInt(rival.style.width.slice(0, -2));
    const rivalHeight = parseInt(rival.style.height.slice(0, -2));
    const rivalRight = rivalLeft + rivalWidth;
    const rivalBottom = rivalTop + rivalHeight;
    const rivalMiddleX = (rivalLeft + rivalRight) / 2;

    const alert = document.createElement("div");
    alert.className = `ss-rival-alerts`;
    alert.style = `
        top: ${-30}px;
        left: ${8}px;
        width: 25px;
        height: 25px;
        background-image: url("Images/Space/warns/warn(0).png");
    `;
    rival.appendChild(alert);

    setTimeout(function() {
        if(alert) {
            alert.remove();
        };
    }, delay * 1000);
};