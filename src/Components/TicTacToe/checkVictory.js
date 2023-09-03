import tieConfig from "./tieConfig";
import victoryConfig from "./victoryConfig";
import gameStats from "../../Settings/gameStats.json";
import audio from "../../Functions/audios";

export default function checkVictory() {
    let vic = [
        [gameStats.places[0], gameStats.places[1], gameStats.places[2]],
        [gameStats.places[3], gameStats.places[4], gameStats.places[5]],
        [gameStats.places[6], gameStats.places[7], gameStats.places[8]],
        [gameStats.places[0], gameStats.places[3], gameStats.places[6]],
        [gameStats.places[1], gameStats.places[4], gameStats.places[7]],
        [gameStats.places[2], gameStats.places[5], gameStats.places[8]],
        [gameStats.places[0], gameStats.places[4], gameStats.places[8]],
        [gameStats.places[2], gameStats.places[4], gameStats.places[6]]
    ];
    let tieCheck = true;
    for(let i = 0; i <= vic.length - 1; i++) {
        if(vic[i][0] === 1 && vic[i][1] === 1 && vic[i][2] === 1) {
            console.log("Jogador 1 venceu!");
            audio("../../Audios/snd_victory.mp3", 2);
            victoryConfig(1);
            tieCheck = false;
            break;
        } else if(vic[i][0] === 2 && vic[i][1] === 2 && vic[i][2] === 2) {
            console.log("Jogador 2 venceu!");
            audio("../../Audios/snd_defeat.mp3", 4);
            victoryConfig(2);
            tieCheck = false;
            break;
        };
    };
    if((!gameStats.places.includes(0)) && tieCheck === true) {
        tieConfig();
    };
}