export default function explodeAllEnemyShots() {
    for(let enemy of document.querySelectorAll(".ss-enemy-shots")) {
        enemy.remove();
    }
}