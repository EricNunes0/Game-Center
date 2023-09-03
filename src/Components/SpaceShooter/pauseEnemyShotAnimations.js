export default function pauseEnemyShotAnimations(boolean) {
    let enemies = document.querySelectorAll(".ss-enemy-shots");
    if(boolean === true) {
        for(let enemyShot of enemies) {
            enemyShot.style.animationPlayState = "paused";
        }
    } else {
        for(let enemyShot of enemies) {
            enemyShot.style.animationPlayState = "running";
        }
    };
};