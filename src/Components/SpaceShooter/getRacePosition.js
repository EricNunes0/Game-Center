import defeatPlayer from "./defeatPlayer";

export default function getRacePosition() {
    let racers = [];
    let players = document.querySelectorAll(".ss-players");
    for(let player of players) {
        racers.push(player);
    };
    for(let rival of document.getElementsByClassName("ss-rivals")) {
        racers.push(rival);
    };

    let positions = [];

    for(let racer of racers) {
        let top = parseInt(racer.style.top.slice(0, -2));
        positions.push([racer, top]);
    };

    sortArray(positions, 1);
    console.table(positions);
    return positions;

};

function sortArray(array, column) {
    let i = 0, j = 0;
    for(i = 0; i <= array.length - 1; i++) {
        let topI = array[i][column];
        for(j = 0; j <= array.length - 1; j++) {
            let topJ = array[j][column];
            if(topJ > topI) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            };
        };
    };
};