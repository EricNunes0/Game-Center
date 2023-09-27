import SSJSON from "../../Settings/spaceshooter.json";
import removeCanvasAnimation from "./removeCanvasAnimation";

export default function setBackground() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    let scenary = mission.scenary;
    let scenaryWidth = scenary.width;
    let scenaryHeight = scenary.height;
    let scenaryPosition = scenary.position;
    const canvas = document.querySelector("#space-shooter-canvas");
    if(canvas) {
        removeCanvasAnimation();
        setTimeout(function() {
            canvas.style.backgroundImage = `url("${scenary.image}")`;
            canvas.style.backgroundSize = `${scenaryWidth.length}${scenaryWidth.unit} ${scenaryHeight.length}${scenaryHeight.unit}`;
            canvas.style.backgroundPositionY = scenaryPosition.y;
            canvas.style.animation = scenary.animation;
            const framesDiv = document.querySelector("#ss-scenary-frames-div");
            if(scenary.frames) {
                let out = "";
                for(const frame of scenary.frames) {
                    out += `<div class = "ss-scenary-frames" style = "background-image: url('${frame.image}'); animation: ${frame.animation}">
                    </div>`;
                };
                framesDiv.innerHTML = out;
            } else {

                framesDiv.innerHTML = "";
            };
        }, 500);
    };
};