import audio from "../../Functions/audios";
import hideLevelSelectMenu from "./hideLevelSelectMenu";
import revealLevelSelectMenu from "./revealLevelSelectMenu";

export default function levelSelectMenu() {
    const selectMenu = document.querySelector("#ss-level-select-menu");

    if(selectMenu.classList.contains("closed")) {
        audio("../../Audios/space/snd_menuEffect(0).mp3", 0.8);
        revealLevelSelectMenu();
    } else {
        audio("../../Audios/space/snd_menuEffect(2).mp3", 0.8);
        hideLevelSelectMenu();
    }
};