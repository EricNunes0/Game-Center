import SSJSON from "../../Settings/spaceshooter.json";
import startSelectedLevel from "./startSelectedLevel";

export default function CreateLevelSelectButtons() {
    let rows = [];
    for(let mission of SSJSON.missions) {
        rows.push(CreateLevelSelectButton(mission));
    };
    const selectButtonsMain = document.getElementById("level-select-buttons-main");
    if(!selectButtonsMain) {
        return(
            <div id = "level-select-buttons-main">
                {rows}
            </div>
        );
    };
};

function CreateLevelSelectButton(mission) {
    return(
        <div className = "level-select-buttons-divs" key = {mission.id}>
            <button type = "button" className = "level-select-buttons" id = {`level-select-button-${mission.id}`} key = {`level-select-button-${mission.id}`} onClick = {() => {startSelectedLevel(mission.id)}}>
                <div className = "level-select-categorie-divs">
                    <img className = "level-select-categorie-images" src = {`${SSJSON.missionCategories[mission.categorie].icon}`}></img>
                </div>
                <p className = "level-select-button-ids">{mission.id}</p>
                <CreateLevelSelectStars mission={mission}></CreateLevelSelectStars>
            </button>
        </div>
    );
};

function CreateLevelSelectStars({mission}) {
    let classes = [];
    for(let i = 0; i <= 2; i++) {
        if(mission.stars[i].collected === true) {
            classes.push(`level-select-stars-divs`);
        } else {
            classes.push(`level-select-stars-divs gray`);
        };
    };
    return(
        <div className = "level-select-stars-main">
            <div className = {`${classes[0]}`} id = "level-select-stars-div-0">
                <img className = "level-select-stars-images" id = "level-select-star-0" src = "Images/Space/star.png"></img>
            </div>
            <div className = {`${classes[1]}`} id = "level-select-stars-div-1">
                <img className = "level-select-stars-images" id = "level-select-star-1" src = "Images/Space/star.png"></img>
            </div>
            <div className = {`${classes[2]}`} id = "level-select-stars-div-2">
                <img className = "level-select-stars-images" id = "level-select-star-2" src = "Images/Space/star.png"></img>
            </div>
        </div>
    );
};