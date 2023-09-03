import "./Minesweeper.css";
import "./Menus/MSConfigsMenu.css";
import MSConfigsMenu from"./Menus/MSConfigsMenu";
import MSOpenMenu from "./Menus/MSOpenMenu";
import changePageIcon from "./changePageIcon";
import changePageTitle from "../../Functions/changePageTitle";
import CreateTabuleiro from "./CreateTabuleiro";
import GameTitle from "../../Functions/GameTitle";
import MSHudDivReveal from "./MSHudDivReveal";
import MSTheme from "./MSTheme";
import resetGame from "./resetGame";
import setBombs from "./setBombs";
import toggleActiveEvent from "./toggleActiveEvent";
import toggleFlagEvents from "./toggleFlagEvents";
import { useEffect } from "react";
import minesweeperJSON from "../../Settings/minesweeper.json";
import disableContextMenu from "../../Functions/disableContextMenu";
import MSCloseMenu from "./Menus/MSCloseMenu";

export default function Minesweeper() {
    changePageTitle(`Game Center - Minesweeper`);
    changePageIcon(minesweeperJSON.minesweeperIcons.yellow);

    const tableY = minesweeperJSON.height;
    const tableX = minesweeperJSON.width;

    useEffect(() => {
        setBombs(tableY, tableX);
        toggleFlagEvents();
        disableContextMenu();
        MSHudDivReveal();
    }, []);

    return (
        <div id = "mineswepper-game-main">
            <div id = "minesweeper-confetti-area"></div>
            <div className = "closed" id = "minesweeper-menus-area">
                <MSConfigsMenu />
            </div>
            <div id = "game-area">
                <div className = {`${minesweeperJSON.theme}`} id = "game-div">
                    <div id = "configs-div">
                        <div id = "configurations-container">
                            <div className = "configurations-divs">
                                <a href = "/">
                                    <button type = "button" className = "configs-buttons" id = "home-return-button" tabIndex="-1">
                                        <img className = {`configs-icons ${minesweeperJSON.theme}`} id = "home-return-icon" alt = "Início" src = "https://i.imgur.com/dqMMXNp.png"/>
                                    </button>
                                </a>
                                <div className = "config-labels-divs closed" id = "home-return-label-div">
                                    <p className = "config-labels" id = "home-return-label">Retornar</p>
                                </div>
                            </div>
                            <div className = "configurations-divs">
                                <button type = "button" className = "configs-buttons" id = "repeat-button" onClick = {() => resetGame()} tabIndex="-1">
                                    <img className = {`configs-icons ${minesweeperJSON.theme}`} id = "repeat-icon" alt = "Reiniciar" src = "https://i.imgur.com/oTGKQLH.png"/>
                                </button>
                                <div className = "config-labels-divs closed" id = "repeat-label-div">
                                    <p className = "config-labels" id = "repeat-label">Reiniciar</p>
                                </div>
                            </div>
                            <div className = "configurations-divs" id = "theme-div">
                                <button type = "button" className = "configs-buttons" id = "theme-button" onClick = {() => MSTheme()} tabIndex="-1">
                                    <img className = {`configs-icons ${minesweeperJSON.theme}`} id = "theme-icon" alt = "Tema" src = "https://i.imgur.com/EFjsg8D.png"/>
                                </button>
                                <div className = "config-labels-divs closed" id = "theme-label-div">
                                    <p className = "config-labels" id = "theme-label">Trocar tema</p>
                                </div>
                            </div>
                            <div className = "configurations-divs" id = "grade-div">
                                <button type = "button" className = "configs-buttons" id = "grade-button" onClick = {() => MSOpenMenu("ms-config-grade")} tabIndex="-1">
                                    <img className = {`configs-icons ${minesweeperJSON.theme}`} id = "grade-icon" alt = "Grade" src = "https://i.imgur.com/5FLkPSj.png"/>
                                </button>
                                <div className = "config-labels-divs closed" id = "grade-label-div">
                                    <p className = "config-labels" id = "grade-label">Editar tabuleiro</p>
                                </div>
                            </div>
                            {/*<div className = "configurations-divs" id = "help-div">
                                <button type = "button" className = "configs-buttons" id = "help-button" tabIndex="-1">
                                    <img className = {`configs-icons ${minesweeperJSON.theme}`} id = "help-icon" src = "https://i.imgur.com/HsXPZix.png"/>
                                </button>
                            </div>
                            <div className = "configurations-divs" id = "sound-div">
                                <button type = "button" className = "configs-buttons" id = "sound-button" tabIndex="-1">
                                    <img className = {`configs-icons ${minesweeperJSON.theme}`} id = "sound-icon" src = "https://i.imgur.com/hmiIbPC.png"/>
                                </button>
                            </div>
                            <div id = "color-div">
                                <button type = "button" className = "configs-buttons" id = "color-button" tabIndex="-1">
                                    <img className = {`configs-icons ${minesweeperJSON.theme}`} id = "color-icon" src = "https://i.imgur.com/416g7pe.png"/>
                                </button>
                            </div>*/}
                        </div>
                    </div>
                    <div id = "title-div">
                        <GameTitle className = {`${minesweeperJSON.theme}`} id = "title">Campo Minado</GameTitle>
                    </div>
                    <div id = "game-hud">
                        <div className = "items-hud-divs" id = "bomb-div">
                            <div id = "bombas-image-div">
                                <img className = "hud-images" id = "bomba-image" alt = "Bombas" src = "https://i.imgur.com/rqragDE.png"/>
                            </div>
                            <div className = "count-divs" id = "bombas-div">
                                <p className = {`counts ${minesweeperJSON.theme}`} id = "bombas-count">0</p>
                            </div>
                        </div>
                        <div className = "items-hud-divs" id = "bandeira-div">
                            <div id = "bandeira-image-div">
                                <img className = "hud-images" id = "bandeira-image" alt = "Bandeiras" src = "https://i.imgur.com/y3kf2ja.png"/>
                            </div>
                            <div className = "count-divs" id = "bandeiras-div">
                                <p className = {`counts ${minesweeperJSON.theme}`} id = "bandeiras-count">0</p>
                            </div>
                        </div>
                    </div>
                    <div id = "hud-reveal-main-div">
                        <div className = "hud-reveal-divs closed" id = "reveal-bomb-div">
                            <p>Esta é a quantidade de bombas escondidas no tabuleiro. Cuidado para não explodí-las!</p>
                        </div>
                        <div className = "hud-reveal-divs closed" id = "reveal-bandeira-div">
                            <p>Esta é a quantidade de bandeiras restantes. Quando você tiver certeza de onde está uma das minas, clique com o botão direito para marcar o local com uma bandeira.</p>
                        </div>
                    </div>
                    <div id = "alert-div">
                        <p className = {`alerts ${minesweeperJSON.theme}`} id = "alert">{tableY}x{tableX}</p>
                    </div>
                    <div id = "tabuleiro-div">
                        <table id = "tabuleiro" className = "size-9">
                            <CreateTabuleiro y = {`${tableY}`} x = {`${tableX}`}/>
                        </table>
                    </div>
                </div>
            </div>
    </div>
    )
}