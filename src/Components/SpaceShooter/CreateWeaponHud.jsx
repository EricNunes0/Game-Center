import ReactDomServer from 'react-dom/server';
import SSJSON from "../../Settings/spaceshooter.json";

export default function CreateWeaponHud() {
    let rows = [];
    for(let i = 0; i <= SSJSON.playersActive - 1; i++) {
        rows.push(CreateWeaponPlayersDivs(i));
    };

    if(!document.getElementById("ss-weapon-hud")) {
        return(
            <div id = "ss-weapon-hud">
                {rows}
            </div>
        );
    } else {
        document.getElementById("ss-weapon-hud").innerHTML = ReactDomServer.renderToString(rows);
    };
};

function CreateWeaponPlayersDivs(index) {
    let lifesDiv = CreateLifesDiv(index);
    let rechargeDiv = createRechargeDiv(index);

    return(
        <div className = "ss-weapon-player-huds" id = {`ss-weapon-player-hud-${index}`} key = {`${index}`}>
            {lifesDiv}
            {rechargeDiv}
        </div>
    );
};

function CreateLifesDiv(index) {
    let lifes = SSJSON.players[index].lifes;
    let rows = [];
    for(let i = 0; i <= lifes - 1; i++) {
        rows.push(createLifeDiv(index, i));
    };
    
    return (
        <div className = "ss-lifes-divs" id = {`ss-lifes-div-${index}`}>
            {rows}                    
        </div>
    );
}

function createLifeDiv(index, key) {
    return (
        <div className = "ss-lifes" id = {`ss-lifes-${index}`} key = {`ss-life-${index}-${key}`}></div>
    )
}

function createRechargeDiv(index) {
    return(
        <div className = "ss-recharge-divs" id = {`ss-recharge-div-${index}`}>
            <div className = "ss-weapon-recharge-divs" id = {`ss-weapon-recharge-div-${index}`}>
                <div className = {`ss-recharges shot-${SSJSON.players[index].gun}`} id = {`ss-recharge-${index}`}></div>
            </div>
            <div className = "ss-shots-divs" id = {`ss-shots-div-${index}`}>
                <p className = "ss-shots-counters" id = {`ss-shots-counter-${index}`}>{SSJSON.players[index].shots}</p>
            </div>
        </div>
    )
}