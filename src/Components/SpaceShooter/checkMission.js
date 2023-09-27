import audio from "../../Functions/audios";
import removeLoopAudios from "../../Functions/removeLoopAudios";
import SSJSON from "../../Settings/spaceshooter.json";
import defeatPlayer from "./defeatPlayer";
import defeatPlayers from "./defeatPlayers";
import disablePauseButton from "./disablePauseButton";
import explodeAllBossShots from "./explodeAllBossShots";
import explodeAllEnemies from "./explodeAllEnemies";
import explodeAllEnemyShots from "./explodeAllEnemyShots";
import explodeAllOrbs from "./explodeAllOrbs";
import getRacePosition from "./getRacePosition";
import showRestartMenu from "./showRestartMenu";

export default function checkMission() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    switch(mission.categorie) {
        case "K":
            let playersKills = 0;
            for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                playersKills += SSJSON.players[i].kills;
            };
            if(playersKills >= mission.kills) {
                SSJSON.missions[SSJSON.currentMission].completed = true;
                document.getElementById("ss-mission-text").style.color = "#0f0";
                disablePauseButton(true);
                explodeAllEnemies();
                explodeAllEnemyShots();
                mission.completed = true;
                showRestartMenu();
                removeLoopAudios();
                audio("../../Audios/space/snd_victory(0).mp3", 6);
            }
            break;
        case "C":
            let playersOrbs = 0;
            for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                playersOrbs += SSJSON.players[i].orbs;
            };
            if(playersOrbs >= mission.orbs) {
                SSJSON.missions[SSJSON.currentMission].completed = true;
                document.getElementById("ss-mission-text").style.color = "#0f0";
                disablePauseButton(true);
                explodeAllEnemies();
                explodeAllEnemyShots();
                explodeAllOrbs();
                mission.completed = true;
                showRestartMenu();
                removeLoopAudios();
                audio("../../Audios/space/snd_victory(0).mp3", 6);
            }
            break;
        case "B":
            let bosses = document.getElementsByClassName("ss-enemies boss");
            if(bosses.length <= 0) {
                SSJSON.missions[SSJSON.currentMission].completed = true;
                document.getElementById("ss-mission-text").style.color = "#0f0";
                disablePauseButton(true);
                explodeAllEnemies();
                explodeAllEnemyShots();
                explodeAllBossShots();
                mission.completed = true;
                showRestartMenu();
                removeLoopAudios();
                audio("../../Audios/space/snd_victory(0).mp3", 6);
            }
        case "R":
            let playersMeters = 0;
            //for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                playersMeters += SSJSON.players[0].meters;
            //};
            if(playersMeters >= mission.raceMeters) {
                let positions = getRacePosition();
                if(positions[0][0].classList.contains(`ss-players`)) {
                    SSJSON.missions[SSJSON.currentMission].completed = true;
                    document.getElementById("ss-mission-text").style.color = "#0f0";
                    disablePauseButton(true);
                    explodeAllEnemies();
                    explodeAllEnemyShots();
                    mission.completed = true;
                    showRestartMenu();
                    removeLoopAudios();
                    audio("../../Audios/space/snd_victory(0).mp3", 6);
                } else {
                    defeatPlayers();
                };
            }
            break;
    }
}