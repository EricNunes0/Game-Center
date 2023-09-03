import settings from "../../Settings/configs.json";

export default function generateTurnPlayer() {
    settings.turnPlayer = Math.floor(Math.random() * 2) + 1;
    return settings.turnPlayer;
}