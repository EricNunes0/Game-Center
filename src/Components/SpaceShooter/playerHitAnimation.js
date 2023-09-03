export default function playerHitAnimation(index) {
    const animationDuration = 0.8;
    const player = document.getElementById(`ss-player-${index}`);
    if(player) {
        player.classList.add("hit");
        player.style.animation = `PlayerHit ${animationDuration}s linear 1`;
        setTimeout(function() {
            player.classList.remove("hit");
            player.style.removeProperty("animation");
        }, animationDuration * 1000);
    };
};