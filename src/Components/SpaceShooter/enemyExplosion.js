export default function enemyExplosion(enemy) {
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;
    
    const enemyPlace = enemy.getBoundingClientRect();
    const enemyTop = enemyPlace.top - gameAreaTop;
    const enemyLeft = enemyPlace.left - gameAreaLeft;
    const enemyWidth = parseInt(enemy.style.width.slice(0, -2));
    const enemyHeight = parseInt(enemy.style.width.slice(0, -2));
    let explosion = document.createElement("div");
    explosion.className = `ss-enemies-explosions`;
    explosion.style = `
        display: block;
        width: ${enemyWidth}px;
        height: ${enemyHeight}px;
        top: ${enemyTop}px;
        left: ${enemyLeft}px;
    `;
    gameArea.appendChild(explosion);
};