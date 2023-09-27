export default function pauseShotItems(boolean) {
    let enemies = document.querySelectorAll(".ss-shot-items");
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