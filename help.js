const helpBtn = document.querySelector("#help-button");
const ctrlsFlex = document.querySelector("#controls-flex");

function helpMenu() {
    let checkIfOpened = document.getElementById("controls").value;
    if(checkIfOpened == `closed`) {
        let pageColor = document.getElementById("colors").value;
        if(pageColor == `opened`) {
            colorMenu();
        }
        document.getElementById("controls").value = `opened`;
        document.getElementById("controls-main").className = document.getElementById("controls-main").className.replace("closed", "closing");
        setTimeout(function() {
            document.getElementById("controls-main").className = document.getElementById("controls-main").className.replace("closing", "opened")
        }, 100);
    } else {
        document.getElementById("controls").value = `closed`;
        document.getElementById("controls-main").className = document.getElementById("controls-main").className.replace("opened", "closing");
        setTimeout(function() {
            document.getElementById("controls-main").className = document.getElementById("controls-main").className.replace("closing", "closed")
        }, 100);
    }
}

helpBtn.addEventListener("click", function() {
    helpMenu();
});

const controls = [
    {
        "id": 0,
        "icon": "https://i.imgur.com/xvQkPfI.png",
        "title": "1 - 9",
        "description": "Marcar as opções"
    },
    {
        "id": 1,
        "icon": "https://i.imgur.com/dvdf2Ar.png",
        "title": "G",
        "description": "Mudar modo de jogo"
    },
    {
        "id": 2,
        "icon": "https://i.imgur.com/LLubeKA.png",
        "title": "R",
        "description": "Reiniciar partida"
    },
    {
        "id": 3,
        "icon": "https://i.imgur.com/eY0AM0n.png",
        "title": "C",
        "description": "Limpar placar"
    },
    {
        "id": 4,
        "icon": "https://i.imgur.com/tBpEjw5.png",
        "title": "T",
        "description": "Alterar tema"
    },
    {
        "id": 5,
        "icon": "https://i.imgur.com/yHDXe85.png",
        "title": "H",
        "description": "Abrir/fechar menu de ajuda"
    },
    {
        "id": 6,
        "icon": "https://i.imgur.com/9lR8qPo.png",
        "title": "M",
        "description": "Ativar/desativar efeitos sonoros"
    },
    {
        "id": 7,
        "icon": "https://i.imgur.com/Zi8iXGD.png",
        "title": "P",
        "description": "Abrir/fechar menu de customização"
    }
];

let out = "";
for(let control of controls) {
    out += `<div class = "controls-divs">
        <div class = "controls-images-divs">
            <img class = "controls-images light" src = "${control.icon}" alt = "${control.title}">
        </div>
        <div class = "controls-texts-divs">
            <div class = "controls-titles-divs">
                <p class = "controls-titles light">${control.title}</p>
            </div>
            <div class = "controls-descriptions-divs">
                <p class = "controls-descriptions light">${control.description}</p>
            </div>
        </div>
    </div>
    `;
};


ctrlsFlex.innerHTML = out;