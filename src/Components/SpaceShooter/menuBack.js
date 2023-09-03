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
};