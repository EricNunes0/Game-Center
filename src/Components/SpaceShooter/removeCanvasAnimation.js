export default function removeCanvasAnimation() {
    const canvas = document.querySelector("#space-shooter-canvas");
    if(canvas) {
        canvas.style.animation = `none`;
        console.log(canvas.style.animation)
    };
};