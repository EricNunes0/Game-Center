export default function backgroundAnimation() {
    const background = document.querySelector("#ss-background");

    //setInterval(function() {
        let triangleAmount = 20;
        for(let i = 0; i <= triangleAmount - 1; i++) {
            let triangleAnimationDuration = 2 + Math.floor(Math.random() * 3);
            const triangle = document.createElement("object");
            triangle.className = `ss-background-triangles`;
            triangle.data = `svg/space/triangle.svg`;
            triangle.style.top = `${Math.floor(Math.random() * 100)}%`;
            triangle.style.left = `${Math.floor(Math.random() * 100)}%`;
            triangle.style.animationDuration = `${triangleAnimationDuration}s`;
            background.appendChild(triangle);
            setInterval(function() {
                setTimeout(function() {
                    triangle.style.opacity = 1;
                }, (triangleAnimationDuration / 2) * 1000);
                setTimeout(function() {
                    triangle.style.opacity = 0;
                    setTimeout(function() {                        
                        triangle.style.top = `${Math.floor(Math.random() * 100)}%`;
                        triangle.style.left = `${Math.floor(Math.random() * 100)}%`;
                    }, 400);
                }, triangleAnimationDuration * 1000);
            }, triangleAnimationDuration * 1000);
        };
    //}, 1000);
};