export default function explodeAllEnemies() {
    for(let enemy of document.querySelectorAll(".ss-enemies")) {
        enemy.remove();
    }
}