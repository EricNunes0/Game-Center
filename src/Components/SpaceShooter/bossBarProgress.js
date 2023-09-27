export default function bossBarProgress(lifesRecover, lifes) {
    const bossBar = document.querySelector("#ss-boss-bar");
    if(bossBar) {
        if(lifesRecover && lifes) {
            let percent = parseInt((lifes / lifesRecover) * 100);
            bossBar.style.backgroundSize = `${percent}% 100%`;
        };
    };
};