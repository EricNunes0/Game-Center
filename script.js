document.addEventListener("keydown", (e) => {
    let name = e.key.toLowerCase();
    switch(name) {
        case "1":
            tttInsert("1");
            break;
        case "2":
            tttInsert("2");
            break;
        case "3":
            tttInsert("3");
            break;
        case "4":
            tttInsert("4");
            break;
        case "5":
            tttInsert("5");
            break;
        case "6":
            tttInsert("6");
            break;
        case "7":
            tttInsert("7");
            break;
        case "8":
            tttInsert("8");
            break;
        case "9":
            tttInsert("9");
            break;
        case "r":
            tttReset();
            break;
        case "c":
            clearPlacar();
            break;
        case "g":
            changeGamemode();
            break;
        case "t":
            changeTheme();
            break;
        case "h":
            helpMenu();
            break;
        case "m":
            audioConfig();
            break;
        case "p":
            colorMenu();
            break;
    }
})

let places = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let p1Pts = 0;
let p2Pts = 0;
let p1Color = "#3060ff";
let p2Color = "#f02020";
let tieCount = 0;
let gamemode = 0;
/*
0 - Single player
1 - Multi player
*/
let turnPlayer = Math.floor(Math.random() * 2) + 1;
/*
1 - Jogador 1, Azul
2 - Jogador 2, Vermelho
*/
let audiosOn = 1;
/**
0 - Áudios desligados
1 - Áudios ligados
*/

function generateTurnPlayer() {
    turnPlayer = Math.floor(Math.random() * 2) + 1;
    return turnPlayer;
}

function changeTurnAlert(player) {
    let playerColor = player == 1 ? p1Color : p2Color;
    document.getElementById("alert-message").innerHTML = `É a vez do <span class = "player-spans" id = "player-span-${player}" style = "color: ${playerColor};">jogador ${player}</span>`;
};

function resetPoints() {
    p1Pts = 0;
    p2Pts = 0;
    document.getElementById("p1").innerText = p1Pts;
    document.getElementById("p2").innerText = p2Pts;
    document.getElementById("game-main").style.backgroundColor = "#30ffa0";
};

function addRedBorder(value) {
    document.getElementById(`ttt-${value}`).style.border = `2px solid #f00`;
}

function removeRedBorders() {
    for(let i = 1; i <= 9; i++) {
        document.getElementById(`ttt-${i}`).style.border = `1px solid rgba(0, 0, 0, 0.5)`;
    };
};

function tttInsert(value) {
    if(document.getElementById("ttt-" + value).disabled) {
        return;
    }
    removeRedBorders();
    if(places[value - 1] != 0) {
        playAudio("sounds\\snd_bump.mp3", 1);
        addRedBorder(value);
        return;
    };
    playAudio("sounds\\snd_click.mp3", 3);
    if(gamemode == 0) {
        places[value - 1] = 1;
        blueButtonCheck(value);
        let cpu;
        if(places.includes(0)) {
            while(true) {
                cpu = Math.floor(Math.random() * 9) + 1;
                if(places[cpu - 1] == 0) {
                    places[cpu - 1] = 2;
                    redButtonCheck(cpu);
                    break;
                }
            };
        };
        checkVictory();
    } else if(gamemode == 1) {
        let turnValue = turnPlayer;
        places[value - 1] = turnValue;
        if(turnPlayer == 1) {
            blueButtonCheck(value);
            changeTurnAlert(2);
        } else if(turnPlayer == 2) {
            redButtonCheck(value);
            changeTurnAlert(1);
        };
        let changeTurn = turnPlayer == 1 ? turnPlayer = 2 : turnPlayer = 1;
        checkVictory();
    };
}

function blueButtonCheck(value) {
    document.getElementById("ttt-" + value).className = document.getElementById("ttt-" + value).className.replace("gray", "blue");
    document.getElementById("ttt-" + value).style.backgroundColor = p1Color;
}

function redButtonCheck(value) {
    document.getElementById("ttt-" + value).className = document.getElementById("ttt-" + value).className.replace("gray", "red");
    document.getElementById("ttt-" + value).style.backgroundColor = p2Color;
}

function checkVictory() {
    vic = [
        [places[0], places[1], places[2]],
        [places[3], places[4], places[5]],
        [places[6], places[7], places[8]],
        [places[0], places[3], places[6]],
        [places[1], places[4], places[7]],
        [places[2], places[5], places[8]],
        [places[0], places[4], places[8]],
        [places[2], places[4], places[6]]
    ];
    let tieCheck = true;
    for(let i = 0; i <= vic.length - 1; i++) {
        if(vic[i][0] == 1 && vic[i][1] == 1 && vic[i][2] == 1) {
            console.log("Jogador 1 venceu!");
            playAudio("sounds\\snd_victory.mp3", 2);
            victoryConfig(1);
            tieCheck = false;
            break;
        } else if(vic[i][0] == 2 && vic[i][1] == 2 && vic[i][2] == 2) {
            console.log("Jogador 2 venceu!");
            playAudio("sounds\\snd_defeat.mp3", 4);
            victoryConfig(2);
            tieCheck = false;
            break;
        };
    };
    if((!places.includes(0)) && tieCheck == true) {
        tieConfig();
    };
}

function victoryConfig(player) {
    if(player == 1) {
        p1Pts++;
        document.getElementById("game-main").style.backgroundColor = p1Color;
        document.getElementById("p1").innerText = p1Pts;
    } else if(player == 2) {
        p2Pts++;
        document.getElementById("game-main").style.backgroundColor = p2Color;
        document.getElementById("p2").innerText = p2Pts;
    };
    for(let i = 0; i <= places.length - 1; i++) {
        let btn = document.getElementById("ttt-" + parseInt(i + 1));
        btn.disabled = true;
        if(places[i] == player) {
            btn.className = btn.className.replace("default", "win");
        }
    };
    return;
}

function tieConfig() {
    tieCount++;
    document.getElementById("game-main").style.backgroundColor = "#a0a0a0";
    for(let i = 0; i <= places.length - 1; i++) {
        let btn = document.getElementById("ttt-" + parseInt(i + 1));
        btn.disabled = true;
    };
}

function tttReset() {
    removeRedBorders();
    for(let i = 0; i <= places.length - 1; i++) {
        let btn = document.getElementById("ttt-" + parseInt(i + 1));
        btn.className = btn.className.replace("blue", "gray").replace("red", "gray").replace("win", "default");
        btn.style.backgroundColor = "inherit";
        places[i] = 0;
        btn.disabled = false;
    }
    playAudio("sounds\\snd_repeat.mp3", 3);
}

function changeGamemode() {
    tttReset();
    modeImg = document.getElementById("mode-image");
    alertMsg = document.getElementById("alert-message");
    switch(gamemode) {
        case(0):
            gamemode = 1;
            modeImg.src = "https://i.imgur.com/pL2xig4.png";
            alertMsg.className = alertMsg.className.replace("hidden", "appered");
            let g = generateTurnPlayer();
            changeTurnAlert(g);
            resetPoints();
            document.getElementById("game-mode").innerText = "2 jogadores";
            break;
         case(1):
            gamemode = 0;
            modeImg.src = "https://i.imgur.com/eJiT4kJ.png";
            alertMsg.className = alertMsg.className.replace("appered", "hidden");
            resetPoints();
            document.getElementById("game-mode").innerText = "1 jogador";
            break;
    }
}

function clearPlacar() {
    resetPoints();
    tttReset();
}

function editPlayerColor(player, color) {
    if(player == 1) {
        p1Color = color;
        let btns = document.querySelectorAll(".ttt-buttons");
        for(let i = 0; i <= btns.length - 1; i++) {
            if(btns[i].className.includes("blue")) {
                btns[i].style.backgroundColor = `${color}`;
            };
        };
    } else if(player == 2) {
        p2Color = color;
        let btns = document.querySelectorAll(".ttt-buttons");
        for(let i = 0; i <= btns.length - 1; i++) {
            if(btns[i].className.includes("red")) {
                btns[i].style.backgroundColor = `${color}`;
            };
        };
    };
}

function audioConfig() {
    audiosOn == 0 ? enableAudios() : disableAudios();
};

function enableAudios() {
    audiosOn = 1;
    document.getElementById("sound-icon").src = "https://i.imgur.com/hmiIbPC.png";
};

function disableAudios() {
    audiosOn = 0;
    document.getElementById("sound-icon").src = "https://i.imgur.com/dHsU5x8.png";
};

function removeAudios() {
    let audios = document.getElementsByTagName("audio");
    for(let audio of audios) {
        audio.remove();
    };
};

function playAudio(source, secs) {
    removeAudios();
    if(audiosOn == 0) return;
    let newAudio = document.createElement("audio");
    newAudio.src = source;
    newAudio.setAttribute("preload", "auto");
    newAudio.setAttribute("controls", "none");
    document.body.appendChild(newAudio);
    newAudio.play();
    setTimeout(function() {
        newAudio.remove();
    }, secs * 1000);
};

