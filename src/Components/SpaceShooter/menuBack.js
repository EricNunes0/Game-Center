import SSJSON from "../../Settings/spaceshooter.json";
import audio from "../../Functions/audios";
import hideLevelSelectMenu from "./hideLevelSelectMenu";
import hideRestartMenu from "./hideRestartMenu";
import titleScreenOpen from "./titleScreenOpen";
import freeze from "./freeze";
import freezeMoves from "./freezeMoves";
import resetLifes from "./resetLifes";
import resetKills from "./resetKills";
import resetOrbs from "./resetOrbs";
import resetPoints from "./resetPoints";
import resetShots from "./resetShots";
import resetTime from "./resetTime";
import logoAnimation from "./logoAnimation";
import pauseGame from "./pauseGame";
import explodeAllBossShots from "./explodeAllBossShots";
import explodeAllEnemies from "./explodeAllEnemies";
import explodeAllEnemyShots from "./explodeAllEnemyShots";
import removePlayers from "./removePlayers";
import disableMissionIsRunning from "./disableMissionIsRunning";
import disablePauseButton from "./disablePauseButton";
import explodeAllOrbs from "./explodeAllOrbs";
import removeAllAudios from "../../Functions/removeAllAudios";
import removeLoopAudios from "../../Functions/removeLoopAudios";

export default function menuBack() {
    audio("../../Audios/space/snd_menuEffect(1).mp3", 0.8);
    hideLevelSelectMenu();
    hideRestartMenu();
    titleScreenOpen();
    freeze(false);
    freezeMoves(false);
    resetLifes();
    resetKills();
    resetOrbs();
    resetPoints();
    resetShots();
    resetTime();

    pauseGame(false);
    disableMissionIsRunning();
    disablePauseButton(true);
    explodeAllBossShots();
    explodeAllEnemies();
    explodeAllEnemyShots();
    explodeAllOrbs();

    removeAllAudios();
    removeLoopAudios();
    removePlayers();

    logoAnimation();
};