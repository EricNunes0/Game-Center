import SSJSON from "../../Settings/spaceshooter.json";
import unselectPlayerControlDivs from "./unselectPlayerControlDivs";

var changePlayerControlHandler = false;

export default function changePlayerControls(player, control) {
    const replaceKeys = {
        "ArrowLeft": "←",
        "ArrowRight": "→",
        "ArrowUp": "↑",
        "ArrowDown": "↓",
        "PageUp": "PgUp",
        "PageDown": "PgDn"
    };

    const blockedKeys = ["AudioVolumeMute",
        "AudioVolumeDown",
        "AudioVolumeUp",
        "Meta",
        "Insert",
        "MediaPlayPause",
        "MediaTrackPrevious",
        "\'", "\"", "!", "@", "#", "$", "%","¨", "Dead", "&", "*", "(", ")", "_", "NumLock", "Tab", "CapsLock", "\\", "|", "?", "°", ";", ":", "`", "´", "{", "[", "ª", "~", "^", "}", "]", "º", "<", ">"
    ];
    if(changePlayerControlHandler === true) {
        //unselectPlayerControlDivs();
        return;
    };
    changePlayerControlHandler = true;

    let playerControlButton = document.getElementById(`ss-player-${player}-${control}-button`);
    let playerControlSpan = document.getElementById(`ss-player-${player}-${control}-span`);
    playerControlButton.classList.add(`selected`);

    function editPlayerControl(e) {
        let keyPressed = e.key;
        let keyPressedCode = e.code;
        console.warn(keyPressed);
        let keyPressedText;
        playerControlButton.classList.remove(`selected`);
        if(!blockedKeys.includes(keyPressed)) {
            let keyIsUsed = checkKeySelection(keyPressedCode);
            if(keyIsUsed === false) {
                if(replaceKeys[keyPressed]) {
                    keyPressedText = replaceKeys[keyPressed];
                } else {
                    keyPressedText = keyPressed;
                };
                playerControlSpan.innerHTML = keyPressedText.toLocaleUpperCase();

                if(control === `left`) {
                    SSJSON.players[player].controls.movePlayerLeft = [keyPressedCode];
                } else if(control === `shot`) {
                    SSJSON.players[player].controls.playerShot = [keyPressedCode];
                } else if(control === `right`) {
                    SSJSON.players[player].controls.movePlayerRight = [keyPressedCode];
                };
            } else {
                console.error("Esta tecla já está sendo usada!");
                let errorAnimationDuration = 0.5;
                playerControlButton.classList.add(`error`);
                playerControlButton.style.animation = `ControlDivs ${errorAnimationDuration}s linear forwards`;
                setTimeout(function() {
                    playerControlButton.classList.remove(`error`);
                    playerControlButton.style.removeProperty(`animation`);
                }, errorAnimationDuration * 1000);

            };
        };
        document.removeEventListener("keydown", editPlayerControl, true);
        changePlayerControlHandler = false;
    };

    document.addEventListener("keydown", editPlayerControl, true);
};

function checkKeySelection(code) {
    let result = false;
    for(let i = 0; i <= 1; i++) {
        if(SSJSON.players[i]) {
            if(SSJSON.players[i].controls.movePlayerLeft.includes(code)) {
                result = true;
                break;
            } else if(SSJSON.players[i].controls.movePlayerRight.includes(code)) {
                result = true;
                break;
            } else if(SSJSON.players[i].controls.playerShot.includes(code)) {
                result = true;
                break;
            }
        };
    };
    return result;
};