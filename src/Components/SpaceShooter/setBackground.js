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
            console.warn('a');
            canvas.style.animation = scenary.animation;
        }, 500);
    };
};