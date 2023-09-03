import SSJSON from "../../Settings/spaceshooter.json";

export default function setEnemySizes() {
    let root = document.documentElement;
    for(let i in SSJSON.enemies) {
        let enemy = SSJSON.enemies[i];
        root.style.setProperty(`--ss-enemy-${enemy.id}-width`, `${enemy.width}px`);
        root.style.setProperty(`--ss-enemy-${enemy.id}-height`, `${enemy.height}px`);
        if(enemy.shots) {
            for(let shot of enemy.shots) {
                if(shot.shotWidth) {
                    root.style.setProperty(`--ss-enemy-${enemy.id}-shot-${shot.id}-width`, `${shot.shotWidth}px`);
                };
                if(shot.shotHeight) {
                    root.style.setProperty(`--ss-enemy-${enemy.id}-shot-${shot.id}-height`, `${shot.shotHeight}px`);
                };
            };
        };
    };
};