import settings from "../Settings/configs.json";

export default function audioConfig() {
    settings.audiosEnabled == false ? enableAudios() : disableAudios();
};

function enableAudios() {
    settings.audiosEnabled = true;
    //document.getElementById("sound-icon").src = "https://i.imgur.com/hmiIbPC.png";
};

function disableAudios() {
    settings.audiosEnabled = false;
    //document.getElementById("sound-icon").src = "https://i.imgur.com/dHsU5x8.png";
};