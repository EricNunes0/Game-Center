export default function shipsToTop(secs) {
    const players = document.querySelectorAll(".ss-players");
    for(let player of players) {
        player.style.animation = `ShipToTop ${secs}s linear 1`;
        setTimeout(function() {
            player.style.top = `0px`;
        }, secs * 1000);
    };
};