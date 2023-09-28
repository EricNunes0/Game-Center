import createOrb from "./createOrb";
import generateEnemy from "./generateEnemy";
import SSJSON from "../../Settings/spaceshooter.json";
import generateBoss from "./generateBoss";
import generateRival from "./generateRival";
import toggleObstacles from "./toggleObstacles";
import raceAdvanceLoop from "./raceAdvanceLoop";
import revealBossBar from "./revealBossBar";
import revealRaceBar from "./revealRaceBar";
import rivalsAdvanceLoop from "./rivalsAdvanceLoop";
import resetBossBar from "./resetBossBar";
var missionsActive = [];
var orbsActive = [];

export default function getMission() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    console.log("Missão atual:", SSJSON.currentMission);
    const missionText = document.getElementById("ss-mission-text");
    document.getElementById("ss-mission-icon").src = SSJSON.missionCategories[mission.categorie].icon;
    let getMissionInterval;
    if(mission) {
        if(mission.categorie === `K`) {
            let playersKills = 0;
            for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                playersKills += SSJSON.players[i].kills;
            };
            missionText.innerText = `${playersKills}/${mission.kills}`;
            getMissionInterval = setInterval(function() {
                /* Para o caso de reiniciar a fase */
                if(!missionsActive.includes(getMissionInterval)) {
                    missionsActive.push(getMissionInterval);
                };
                if(missionsActive.length >= 2) {
                    clearInterval(missionsActive[0]);
                    missionsActive = [missionsActive[1]];
                    return;
                }
                if(mission.isRunning === false) {
                    clearInterval(getMissionInterval);
                    return;
                };
                const index = mission.enemies[Math.floor(Math.random() * mission.enemies.length)];
                const time = Math.floor(Math.random() * 5) + 1;
                setTimeout(function() {
                    if(mission.isRunning === true) {
                        if(SSJSON.freeze === true) {
                            return;
                        };
                        generateEnemy(index);
                    };
                }, time * 1000);
            }, mission.enemyInterval * 1000);
        } else if(mission.categorie === `C`) {
            let playersOrbs = 0;
            for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                playersOrbs += SSJSON.players[i].orbs;
            };
            missionText.innerText = `${playersOrbs}/${mission.orbs}`;

            let orbIntervalSecs;
            if(mission.orbInterval) {
                orbIntervalSecs = mission.orbInterval;
            } else {
                orbIntervalSecs = mission.enemyInterval;
            };

            getMissionInterval = setInterval(function() {
                /* Para o caso de reiniciar a fase */
                if(!missionsActive.includes(getMissionInterval)) {
                    missionsActive.push(getMissionInterval);
                };
                if(missionsActive.length >= 2) {
                    clearInterval(missionsActive[0]);
                    missionsActive = [missionsActive[1]];
                    return;
                }
                if(mission.isRunning === false) {
                    clearInterval(getMissionInterval);
                    return;
                };
                const index = mission.enemies[Math.floor(Math.random() * mission.enemies.length)];
                const time = Math.floor(Math.random() * 5) + 1;
                setTimeout(function() {
                    if(mission.isRunning === true) {
                        if(SSJSON.freeze === true) {
                            return;
                        };
                        generateEnemy(index);
                    };
                }, time * 1000);
            }, mission.enemyInterval * 1000);

            let orbInterval = setInterval(function() {
                /* Para o caso de reiniciar a fase (orbs) */
                if(!orbsActive.includes(orbInterval)) {
                    orbsActive.push(orbInterval);
                };
                if(orbsActive.length >= 2) {
                    clearInterval(orbsActive[0]);
                    orbsActive = [orbsActive[1]];
                    return;
                }
                if(mission.isRunning === false) {
                    clearInterval(orbInterval);
                    return;
                };
                if(mission.isRunning === true) {
                    if(SSJSON.freeze === true) {
                        return;
                    };
                    createOrb();
                };
            }, orbIntervalSecs * 1000);

        } else if(mission.categorie === `B`) {
            let playersBossKills = 0;
            for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
                playersBossKills += SSJSON.players[i].bossKills;
            };
            missionText.innerText = `${playersBossKills}/${mission.bosses.length}`;
            const boss = mission.bosses[Math.floor(Math.random() * mission.bosses.length)];
            generateBoss(0);
            revealBossBar();
            resetBossBar();
        } else if(mission.categorie === `R`) {
            missionText.innerText = `0/${mission.raceMeters}`;
            const rival = mission.rivals[Math.floor(Math.random() * mission.rivals.length)];
            generateRival(rival);
            revealRaceBar();
            raceAdvanceLoop();
            rivalsAdvanceLoop();
            setTimeout(function() {toggleObstacles();}, 3000);
        };
    };
}