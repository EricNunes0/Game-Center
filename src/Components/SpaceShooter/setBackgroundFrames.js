import SSJSON from "../../Settings/spaceshooter.json";

export default function setBackgroundFrames() {
    let mission = SSJSON.missions[SSJSON.currentMission];

    const BGFrames = document.querySelector("#ss-background-frames");
    
    if(mission.backgrounds) {
        for(let bg of mission.backgrounds) {
            setTimeout(function() {
                let bgFrame = document.createElement("div");
                bgFrame.className = `ss-bg-frames`;
                if(bg.id) {
                    bgFrame.id = bg.id;
                }
                bgFrame.style = `
                    background-image: url("${bg.image}");
                    width: ${bg.width};
                    height: ${bg.height};
                    top: ${bg.top};
                    animation: ${bg.animationName} ${bg.duration}s linear 1;
                `;
                BGFrames.appendChild(bgFrame);
                setTimeout(function() {
                    if(bgFrame) {
                        BGFrames.removeChild(bgFrame);
                    };
                }, (bg.duration * 1000) - 100);
            }, bg.timeSpawn * 1000);
        }
    };
}