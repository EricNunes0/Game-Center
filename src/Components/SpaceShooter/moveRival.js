export default function moveRival(object, rivalWidth, mid, x0, x1) {
    const canvas = document.getElementById("space-shooter-canvas");
    const canvasWidth = canvas.offsetWidth;
    let transitionTime = 0.3;
    if(!object.classList.contains(`moving`)) {
        /*console.log("Rival está na posição", mid);

        console.log("Borda da pedra na esquerda", x0);
        
        console.log("Borda da pedra na esquerda", x1);*/


        let midToX0 = mid - x0;
        let midToX1 = x1 - mid;

        /*console.log("Para chegar na borda da pedra na esquerda", midToX0);

        console.log("Para chegar na borda da pedra na direita", midToX1);*/
        let moveLeft;

        let moveLeftOpEsq = (midToX0 + rivalWidth) * -1;
        let moveLeftOpRig = (midToX1 + rivalWidth);

        let objectLeft = parseInt(object.style.left.slice(0, -2));

        let totalLeft;

        if(midToX0 <= midToX1) {
            moveLeft = moveLeftOpEsq;
            if(objectLeft + moveLeft < 0) {
                moveLeft = moveLeftOpRig;
                totalLeft = objectLeft + moveLeft
            } else {
                totalLeft = objectLeft + moveLeft;
            }
            //console.warn("Será mais rápido se você andar para a esquerda", moveLeft);
        } else {
            moveLeft = moveLeftOpRig;
            if(objectLeft + moveLeft > (canvasWidth - rivalWidth)) {
                moveLeft = moveLeftOpEsq;
                totalLeft = objectLeft + moveLeft
            } else {
                totalLeft = objectLeft + moveLeft;
            }
            //console.warn("Será mais rápido se você andar para a direita", moveLeft);
        }


        //console.error("Então você vai andar para a posição", totalLeft);
        object.classList.add("moving");
        object.style.transition = `all ${transitionTime}s`;
        object.style.left = `${totalLeft}px`;

        setTimeout(function() {        
            object.classList.remove("moving");
        }, transitionTime * 1000);
    }
};