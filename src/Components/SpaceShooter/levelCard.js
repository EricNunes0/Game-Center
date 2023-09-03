import SSJSON from "../../Settings/spaceshooter.json";

export default function levelCard() {
    let mission = SSJSON.missions[SSJSON.currentMission];

    const levelCardDiv = document.getElementById("ss-level-card-div");
    const cardFlag = document.getElementById("ss-level-card-flag");
    const cardDescriptionFlag = document.getElementById("ss-level-card-description-flag");
    const cardNameDiv = document.getElementById("ss-level-card-name-div");
    const cardDescriptionDiv = document.getElementById("ss-level-card-description-div");
    const cardName = document.getElementById("ss-level-card-name");
    const cardDescription = document.getElementById("ss-level-card-description");

    levelCardDiv.classList.remove("closed");
    cardFlag.classList.remove("closed");
    cardDescriptionFlag.classList.remove("closed");
    
    levelCardDiv.style.backgroundColor = "#000";
    cardFlag.style.animation = `LevelCardFlag 0.15s linear 1`;
    cardDescriptionFlag.style.animation = `LevelCardDescriptionFlag 0.15s linear 1`;
    cardName.innerText = mission.name;
    cardDescription.innerText = mission.description;

    setTimeout(function() {
        cardNameDiv.classList.remove("closed");
        cardName.style.animation = `LevelCardName 0.3s linear 1`;
        cardDescriptionDiv.classList.remove("closed");
        cardDescription.style.animation = `LevelCardName 0.3s linear 1`;
    }, 300);

    setTimeout(function() {
        levelCardDiv.style.backgroundColor = "transparent";

        setTimeout(function() {
            cardFlag.style.animation = `LevelCardFlagHide 0.2s linear 1`;
            cardDescriptionFlag.style.animation = `LevelCardFlagDescriptionHide 0.2s linear 1`;

            setTimeout(function() {
                levelCardDiv.classList.add("closed");
                cardFlag.classList.add("closed");
                cardDescriptionFlag.classList.add("closed");
                cardNameDiv.classList.add("closed");
                cardDescriptionDiv.classList.add("closed");
            }, 200);
        }, 2000);
    }, 2000);
}