import audio from "../../Functions/audios";
import SSJSON from "../../Settings/spaceshooter.json";
import addShots from "./addShots";
import changeGun from "./changeGun";
import collisionTest from "./collisionTest";
import rechargeShots from "./rechargeShots";

export default function dropWeapon(enemy) {
    let currentMission = SSJSON.currentMission;
    let mission = SSJSON.missions[currentMission];
    if(SSJSON.freeze === true) {
        return;
    };
    if(SSJSON.freezeMovesOnly === true) {
        return;
    };
    const gameArea = document.getElementById("ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    let weaponIndex;
    if(mission.weapons) {
        weaponIndex = mission.weapons[Math.floor(Math.random() * mission.weapons.length)];
    } else {
        weaponIndex = SSJSON.players[0].gun;
    };
    let dropWeapon = SSJSON.guns[weaponIndex];
    let dropWidth = dropWeapon.dropWidth;
    let dropHeight = dropWeapon.dropHeight;
    let dropBackground = dropWeapon.background;
    let dropDuration = dropWeapon.dropDuration;
    let dropAnimationName = dropWeapon.dropAnimationName;
    let dropTop, dropLeft;
    if(enemy) {
        const enemyOffsets = enemy.getBoundingClientRect();
        const enemyTop = enemyOffsets.top;
        const enemyLeft = enemyOffsets.left;
        dropTop = enemyTop - gameAreaTop;
        dropLeft = enemyLeft - gameAreaLeft;
    } else {
        dropTop = 0;
        dropLeft = (gameArea.offsetWidth / 2) - (dropWidth / 2);
    };
    const drop = document.createElement("div");
    drop.className = "ss-weapon-drops";
    drop.style = `
        width: ${dropWidth}px;
        height: ${dropHeight}px;
        top: ${dropTop}px;
        left: ${dropLeft}px;
        background-image: url("${dropBackground}");
        animation: ${dropAnimationName} ${dropDuration}s linear 1;
    `;

    gameArea.appendChild(drop);

    let dropActive = setInterval(() => {
        let players = document.getElementsByClassName("ss-players");
        if(!players) {
            return;
        }
        for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
            let player = document.getElementById(`ss-player-${i}`);
            if(!player) {
                return;
            };
            let collisionCheck = collisionTest(drop, player);
            if(collisionCheck === true) {
                drop.remove();
                audio("../../Audios/space/snd_recharge.mp3", 1);
                changeGun(i, weaponIndex);
                rechargeShots(i);
            };
        };
    }, 2);

    setTimeout(function() {
        if(drop) {
            drop.remove();
        };
        clearInterval(dropActive);
    }, dropDuration * 1000);
}