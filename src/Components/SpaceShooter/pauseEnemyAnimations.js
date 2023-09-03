export default function pauseEnemyAnimations(boolean) {
    let enemies = document.querySelectorAll(".ss-enemies");
    if(boolean === true) {
        for(let enemy of enemies) {
            enemy.style.animationPlayState = "paused";
        }
    } else {
        for(let enemy of enemies) {
            enemy.style.animationPlayState = "running";
        }
    };
};