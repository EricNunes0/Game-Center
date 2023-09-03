import SSJSON from "../../Settings/spaceshooter.json";
import changeMission from "./changeMission";
import startGame from "./startGame";

export default function startSelectedLevel(id) {
    let mission = SSJSON.missions[id];
    if(mission.locked === true) {
        return console.error("Fase bloqueada. Você precisa concluir a fase anterior!");
    };
    changeMission(id);
    startGame();
};