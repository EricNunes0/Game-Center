import "./Forca.css";
import { useEffect, useState } from "react";
import forcaJSON from "../../Settings/forca.json";
import ForcaTeclas from "./ForcaTeclas";
import NewWord from "./NewWord";
import resetGame from "./resetGame";
import ToggleKeyButtons from "./ToggleKeyButtons";
import typeEdit from "./typeEdit";
import keyboardListener from "./keyboardListener";
import forcaTipUse from "./forcaTipUse";
import itemsLabelDivs from "./itemsLabelDivs";
import changePageIcon from "../../Functions/changePageIcon";
import changePageTitle from "../../Functions/changePageTitle";
import GameTitle from "../../Functions/GameTitle";

export default function Forca() {
    changePageTitle(`Game Center - Forca`);
    changePageIcon(forcaJSON.icon);

    const [inputList, setInputList] = useState([]);

    const onAddBtnClick = event => {
        setInputList(inputList.concat(<NewWord key = {inputList.length}/>));
    };

    useEffect(() => {
        typeEdit();
        ToggleKeyButtons();
        itemsLabelDivs();
        keyboardListener();
    }, []);

    return (
        <div id = "forca-page">
            <div className = "closed" id = "forca-message-area">
                <div className = {`forca-messages ${forcaJSON.theme} closed`} id = "forca-defeat-message">
                    <div className = "forca-message-title-divs">
                        <h1 className = {`forca-message-titles ${forcaJSON.theme}`}>Você perdeu!</h1>
                    </div>
                    <div className = "forca-message-answer-div">
                        <p className = {`forca-answer-titles ${forcaJSON.theme}`} id = "forca-answer-title">A resposta era:</p>
                        <p className = {`forca-answers ${forcaJSON.theme}`} id = "forca-answer"><b id = "forca-answer-bold"></b></p>
                        <div id = "forca-repeat-button-div">
                            <button type = "button" className = {`forca-repeat-buttons ${forcaJSON.theme}`} onClick = {() => resetGame()}>Reiniciar</button>
                        </div>
                    </div>
                </div>
                <div className = {`forca-messages ${forcaJSON.theme} closed`} id = "forca-victory-message">
                    <div className = "forca-message-title-divs">
                        <h1 className = {`forca-message-titles ${forcaJSON.theme}`}>Você venceu!</h1>
                    </div>
                    <div className = "forca-message-answer-div">
                        <p id = "forca-reward-title">Você ganhou uma dica para a próxima partida!</p>
                        <div id = "forca-repeat-button-div">
                            <button type = "button" className = {`forca-repeat-buttons ${forcaJSON.theme}`} onClick = {() => resetGame()}>Reiniciar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id = "forca-area">
                <div className = {`forca-divs ${forcaJSON.theme}`} id = "forca-div">
                    <div id = "forca-game-set">
                        <div id = "forca-title-div">
                            <GameTitle className = {`forca-title ${forcaJSON.theme}`}>Forca</GameTitle>
                        </div>
                        <div id = "type-div">
                            <p className = {`forca-type ${forcaJSON.theme}`} id = "forca-type">Dica: <span id = "type-span"></span></p>
                        </div>
                        <div id = "forca-game-area">
                            <div id = "forca-svg-div">
                                <img id = "forca-svg" src = "svg/forca/forca0.svg" width = {200} height = {200} alt="Forca SVG"/>
                            </div>
                            <div id = "forca-letters-main-div">
                                <div id = "forca-letter-blocks-div">
                                    <NewWord/>
                                </div>
                                <ForcaTeclas/>
                                <div id = "forca-wrong-blocks-div"></div>
                            </div>
                        </div>
                        <div id = "forca-items-div">
                            <div className = "forca-items-divs" id = "forca-item-tip-div">
                                <div className = "forca-items-divs-flex">
                                    <div className = "forca-items-hidden-divs closed">
                                        <div className = "forca-items-hidden-title-divs">
                                            <p className = "forca-items-hidden-titles">Dicas</p>
                                        </div>
                                    </div>
                                    <div className = "forca-items-stats-divs">
                                        <div className = "forca-items-buttons-divs">
                                            <button type = "button" className = "forca-items-buttons" id = "forca-item-tip-button" onClick = {() => forcaTipUse()}>
                                                <object className = "forca-items-objects" id = "forca-item-tip-object" width = {40} height = {40} data = "svg/gifts/gift(0).svg" type="image/svg+xml"></object>
                                            </button>
                                        </div>
                                        <div className = "forca-items-counters-divs">
                                            <span className = "forca-items-counters" id = "forca-item-tip-counter">{forcaJSON.tips}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}