import ReactDomServer from 'react-dom/server';
import SSJSON from "../../Settings/spaceshooter.json";

export default function CreatePointsHud() {
    let rows = [];
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        rows.push(CreatePointsDiv(i));
    };

    const hud = document.getElementById(`ss-points-hud`);
    if(!hud) {
        return(
            <div id = "ss-points-hud">
                {rows}
            </div>
        );
    } else {
        hud.innerHTML = ReactDomServer.renderToString(rows);
    };
};

function CreatePointsDiv(index) {
    let icon = CreatePointsIconDiv(index);
    let key = Math.floor(Math.random() * (100 * 100));
    return(
        <div className = "ss-points-divs" id = {`ss-points-div-${index}`} key = {index + key}>
            {icon}
            <div className = "ss-points-texts-divs" id = {`ss-points-text-div-${index}`} key = {index + key}>
                <p className = "ss-points-texts" id = {`ss-points-${index}`}>{SSJSON.players[index].points}</p>
            </div>
        </div>
    );
};

function CreatePointsIconDiv(index) {
    return(
        <div className = "ss-points-icons-divs" id = {`ss-points-icon-div-${index}`} key = {index}>
            <img className = "ss-points-icons" id = {`ss-points-icon-${index}`} src = {SSJSON.players[index].ship} width = {SSJSON.players[index].width / 2} height = {SSJSON.players[index].height / 2}></img>
        </div>
    );
};