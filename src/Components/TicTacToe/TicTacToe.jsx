import "./TicTacToe.css";
import changeGamemode from "./changeGamemode";
import changePlayerColor from "./changePlayerColor";
import TTTChangeTheme from "./TTTChangeTheme";
import clearPlacar from "./clearPlacar";
import colorMenu from "./colorMenu";
import helpMenu from "./helpMenu";
import keyboardListener from "./keyboardListener";
import muteGame from "./muteGame";
import resetGame from "./resetGame";
import HelpControls from "./HelpControls";
import TTTJSON from "../../Settings/tictactoe.json";
import { useEffect } from "react";
import changePageIcon from "../../Functions/changePageIcon";
import changePageTitle from "../../Functions/changePageTitle";
import CreateTable from "./CreateTable";
import GameTitle from "../../Functions/GameTitle";

function TicTacToe() {
    changePageTitle(`Game Center - Tic Tac Toe`);
    changePageIcon(TTTJSON.icon);

    useEffect(() => {
        keyboardListener();
    }, []);
    return (
        <div id = "tictactoe-game-main">
            <input className = "page-configs" id = "theme" type = "hidden" value = {`${TTTJSON.theme}`}/>
            <input className = "page-configs" id = "controls" type = "hidden" value = "closed"/>
            <input className = "page-configs" id = "colors" type = "hidden" value = "closed"/>
            <div className = {`ttt-containers ${TTTJSON.theme}`} id = "ttt-container">
                <div id = "configs-div">
                    <div className = {`ttt-configurations-divs ${TTTJSON.theme}`}>
                        <a href = "/">
                            <button type = "button" className = "configs-buttons" id = "home-return-button" tabIndex="-1">
                                <img className = {`configs-icons ${TTTJSON.theme}`} id = "home-return-icon" alt = "Início" src="https://i.imgur.com/dqMMXNp.png"/>
                            </button>
                        </a>
                    </div>
                    <div className = {`ttt-configurations-divs ${TTTJSON.theme}`} id = "theme-div">
                        <button type = "button" id = "theme-button" onClick = {TTTChangeTheme} tabIndex="-1">
                            <img className = {`theme-icons ${TTTJSON.theme}`} id = "theme-icon" src="https://i.imgur.com/EFjsg8D.png"/>
                        </button>
                    </div>
                    <div className = {`ttt-configurations-divs ${TTTJSON.theme}`} id = "help-div">
                        <button type = "button" id = "help-button" onClick = {helpMenu} tabIndex="-1">
                            <img className = {`help-icons ${TTTJSON.theme}`} id = "help-icon" src="https://i.imgur.com/HsXPZix.png"/>
                        </button>
                    </div>
                    <div className = {`ttt-configurations-divs ${TTTJSON.theme}`} id = "sound-div">
                        <button type = "button" id = "sound-button" tabIndex="-1" onClick = {muteGame}>
                            <img className = {`sound-icons ${TTTJSON.theme}`} id = "sound-icon" src="https://i.imgur.com/hmiIbPC.png"/>
                        </button>
                    </div>
                    <div className = {`ttt-configurations-divs ${TTTJSON.theme}`} id = "color-div">
                        <button type = "button" id = "color-button" onClick = {colorMenu} tabIndex="-1">
                            <img className = {`color-icons ${TTTJSON.theme}`} id = "color-icon" src="https://i.imgur.com/416g7pe.png"/>
                        </button>
                    </div>
                </div>
                <div className = "controls-mains closed" id = "controls-main">
                    <div className = {`controls-boards ${TTTJSON.theme}`} id = "controls-board">
                        <div id = "controls-flex">
                            <HelpControls/>
                        </div>
                    </div>
                </div>
                <div className = "colors-mains closed" id = "colors-main">
                    <div className = {`colors-boards ${TTTJSON.theme}`} id = "colors-board">
                        <div id = "colors-flex">
                            <div className = "colors-divs">
                                <div className = "colors-input-divs">
                                    <input className = "colors-inputs" id = "color-p1" type = "color" value = "#3060ff" onChange = {() => changePlayerColor(1)}/>
                                    <colorsquare className = "color-squares" id = "color-square-1"></colorsquare>
                                </div>
                                <div className = "colors-texts-divs">
                                    <div className = "colors-titles-divs">
                                        <p className = {`colors-titles ${TTTJSON.theme}`}>Jogador 1</p>
                                    </div>
                                    <div className = "colors-descriptions-divs">
                                        <p className = {`colors-descriptions ${TTTJSON.theme}`}>Escolha a cor do jogador 1</p>
                                    </div>
                                </div>
                            </div>
                            <div className = "colors-divs">
                                <div className = "colors-input-divs">
                                    <input className = "colors-inputs" id = "color-p2" type = "color" value = "#f02020" onChange = {() => changePlayerColor(2)}/>
                                    <colorsquare className = "color-squares" id = "color-square-2"></colorsquare>
                                </div>
                                <div className = "colors-texts-divs">
                                    <div className = "colors-titles-divs">
                                        <p className = {`colors-titles ${TTTJSON.theme}`}>Jogador 2</p>
                                    </div>
                                    <div className = "colors-descriptions-divs">
                                        <p className = {`colors-descriptions ${TTTJSON.theme}`}>Escolha a cor do jogador 2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GameTitle className = {`game-titles ${TTTJSON.theme}`}>Jogo da velha</GameTitle>
                <p className = {`game-modes ${TTTJSON.theme}`} id = "game-mode">1 jogador</p>
                <div id = "placar">
                    <div className = "placar-areas" id = "p1-area">
                        <span className = "pts-counters" id = "p1">0</span>
                    </div>
                    <div className = "placar-areas" id = "mode-area">
                        <button id = "mode-button" onClick = {changeGamemode}>
                            <img id = "mode-image" src = "https://i.imgur.com/eJiT4kJ.png"/>
                        </button>
                    </div>
                    <div className = "placar-areas" id = "p2-area">
                        <span className = "pts-counters" id = "p2">0</span>
                    </div>
                </div>
                <p className = {`alerts ${TTTJSON.theme} hidden`} id = "alert-message"></p>
                <CreateTable></CreateTable>
                <div id = "reset-container">
                    <button className = {`reset-buttons ${TTTJSON.theme}`} id = "reset-button" onClick = {resetGame}>Reiniciar</button>
                    <button className = {`clear-buttons ${TTTJSON.theme}`} id = "clear-button" onClick = {clearPlacar}>Limpar placar</button>
                </div>
            </div>
        </div>
    )
};

export default TicTacToe;