const confettiColors = [
    "#f02020",
    "#f06020",
    "#f0f020",
    "#20f020",
    "#20f0f0",
    "#2020f0",
    "#f020f0",
    "#6020f0",
];

let confettiAnimationOn = false;

export default class Confetti {
    async start(id) {
        confettiAnimationOn = true;
        const timer = ms => new Promise(res => setTimeout(res, ms))
        const confettiArea = document.getElementById(id);
        console.log(confettiArea);
        while(confettiAnimationOn === true) {
            console.log("Confetti criado");
            const animationDurationInSecs = Math.floor(Math.random() * 10) + 1;
            let span = document.createElement(`span`);
            span.className = `confettis`;
            span.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            span.style.left = `${Math.floor(Math.random() * 95)}%`;
            span.style.transform = `rotate(${Math.floor(Math.random() * 180) + 90}deg)`;
            span.style.animation = `confettiDown ${animationDurationInSecs}s linear 1, confettiMove 0.5s linear infinite`;
            confettiArea.appendChild(span);
            setTimeout(function() {
                confettiArea.removeChild(span);
            }, animationDurationInSecs * 1000);
            await timer(50);
        };
    };
    stop() {
        console.log("Confetti finalizado");
        confettiAnimationOn = false;
    };
}