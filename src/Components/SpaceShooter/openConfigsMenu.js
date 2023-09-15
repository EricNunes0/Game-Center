import audio from "../../Functions/audios";
import unselectPlayerControlDivs from "./unselectPlayerControlDivs";

export default function openConfigsMenu() {
    unselectPlayerControlDivs();
    const configsDiv = document.getElementById(`ss-configs-div`);
    let classArray = configsDiv.classList;
    if(classArray.contains(`closed`)) {
        audio("../../Audios/space/snd_menuEffect(0).mp3", 0.8);
        classArray.remove(`closed`);
    } else {
        audio("../../Audios/space/snd_menuEffect(2).mp3", 0.8);
        classArray.add(`closed`);
    };
};