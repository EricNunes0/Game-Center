import SSJSON from "../../Settings/spaceshooter.json";

export default function setBossesSizes() {
    let root = document.documentElement;
    for(let i in SSJSON.bosses) {
        let boss = SSJSON.bosses[i];
        root.style.setProperty(`--ss-boss-${boss.id}-width`, `${boss.width}px`);
        root.style.setProperty(`--ss-boss-${boss.id}-height`, `${boss.height}px`);
        if(boss.shotWidth) {
            root.style.setProperty(`--ss-boss-shot-${boss.id}-width`, `${boss.shotWidth}px`);
        };
        if(boss.shotHeight) {
            root.style.setProperty(`--ss-boss-shot-${boss.id}-height`, `${boss.shotHeight}px`);
        };
    };
};