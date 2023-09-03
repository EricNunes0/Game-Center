import settings from "../../Settings/configs.json";

export default function muteGame() {
    if(settings.audiosEnabled === true) {
        settings.audiosEnabled = false;
        document.getElementById("sound-icon").src = "https://i.imgur.com/dHsU5x8.png";
    } else {
        settings.audiosEnabled = true;
        document.getElementById("sound-icon").src = "https://i.imgur.com/hmiIbPC.png";
    }
}