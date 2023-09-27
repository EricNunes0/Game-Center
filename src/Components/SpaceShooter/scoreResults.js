import ReactDomServer from 'react-dom/server';
import SSJSON from "../../Settings/spaceshooter.json";
import EditSelectButtonStars from './EditSelectButtonStars';
import editLevelSelectStars from './editLevelSelectStars';

export default function scoreResults() {
    let mission = SSJSON.missions[SSJSON.currentMission];
    document.querySelector("#ss-victory-area").classList.remove("closed");

    let playersStats = {
        points: 0,
        lifes: 0,
        shots: 0,
        time: 0
    }

    let lifeBonus = 0, shotBonus = 0, timeBonus = 0;
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        playersStats.points += SSJSON.players[i].points;
        playersStats.lifes += SSJSON.players[i].lifes;
        playersStats.shots += SSJSON.players[i].shots;
        playersStats.time = SSJSON.players[i].time;

    };
    lifeBonus = playersStats.lifes * 500;
    shotBonus = playersStats.shots * 50;
    timeBonus = (mission.time - playersStats.time) * 10;

    //let playerStats = SSJSON.players[0];
    let lifesResults = [];
    for(let i = 0; i <= playersStats.lifes - 1; i++) {
        lifesResults.push(createLifeResultDiv(i));
    };

    document.getElementById("player-score-results-div").innerHTML = playersStats.points;
    document.getElementById("life-score-results-div").innerHTML = `(+${lifeBonus})`;
    document.getElementById("life-score-icons-div").innerHTML = ReactDomServer.renderToString(lifesResults);
    document.getElementById("shot-score-results-div").innerHTML = `${playersStats.shots} (+${shotBonus})`;
    document.getElementById("time-score-results-div").innerHTML = `${playersStats.time}S (+${timeBonus})`;
    playersStats.points += lifeBonus;
    playersStats.points += shotBonus;
    playersStats.points += timeBonus;
    document.getElementById("total-score-results-div").innerHTML = playersStats.points;
    let starsMax = mission.stars[2].pointsRequired;
    let percent = (playersStats.points / starsMax) * 100;
    if(percent > 100) {
        percent = 100;
    };
    document.getElementById("star-bar-percent").style.width = `${parseInt(percent)}%`;
    for(let i = 0; i <= 2; i++) {
        if(playersStats.points >= mission.stars[i].pointsRequired) {
        document.getElementById(`star-${i}`).classList.remove("gray");
        } else {
        document.getElementById(`star-${i}`).classList.add("gray");
        };
    }
    let stars = [];
    for(let i = 0; i <= 2; i++) {
        if(playersStats.points >= mission.stars[i].pointsRequired) {
            mission.stars[i].collected = true;
            stars.push(i);
        };
    };
    EditSelectButtonStars(mission.id, stars);
    editLevelSelectStars();
}

function createLifeResultDiv(n) {
    return (
        <div className = "ss-score-lifes-divs" key = {`ss-score-life-div-${n}`}>
            <img className = "ss-score-life-icons" src = "Images/spaceshooter/life.gif"></img>
        </div>
    )
}