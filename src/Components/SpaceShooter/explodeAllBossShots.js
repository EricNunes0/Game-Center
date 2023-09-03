export default function explodeAllBossShots() {
    for(let enemy of document.querySelectorAll(".ss-boss-shots")) {
        enemy.remove();
    }
}