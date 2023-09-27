import { useEffect } from "react";
import "./SpaceShooter.css";
import "./styles/bosses.css";
import "./styles/cutscenes.css";
import "./styles/enemyAnimations.css";
import "./styles/explosionFragments.css";
import "./styles/itemsAnimations.css";
import "./styles/players.css";
import "./styles/obstacles.css";
import "./styles/orbs.css";
import "./styles/shotMoves.css";
import "./styles/rivals.css";
import "./styles/scenary.css";
import "./styles/scenaryFrames.css";
import SSJSON from "../../Settings/spaceshooter.json";
import restartGame from "./restartGame";
import startGame from "./startGame";
import nextLevel from "./nextLevel";
import movePlayer from "./movePlayer";
import playerShot from "./playerShot";
import levelSelectMenu from "./levelSelectMenu";
import CreateLevelSelectButtons from "./CreateLevelSelectButtons";
import menuBack from "./menuBack";
import checkLevelSelectButtons from "./checkLevelSelectButtons";
import changePageTitle from "../../Functions/changePageTitle";
import changePageIcon from "../../Functions/changePageIcon";
import changePlayersActive from "./changePlayersActive";
import CreateWeaponHud from "./CreateWeaponHud";
import CreatePointsHud from "./CreatePointsHud";
import openConfigsMenu from "./openConfigsMenu";
import changePlayerControls from "./changePlayerControls";
import backgroundAnimation from "./backgroundAnimation";
import pauseGame from "./pauseGame";
import logoAnimation from "./logoAnimation";

export default function SpaceShooter() {
    changePageTitle(`Game Center - Space Shooter`);
    changePageIcon(SSJSON.icon);
    useEffect(() => {
        logoAnimation();
        backgroundAnimation();
        checkLevelSelectButtons();
    }, []);

    return (
        <div id = "space-shooter-page">
            <div id = "ss-background">
                
            </div>
            <div id = "ss-main">
                <div id = "ss-area">
                    <div id = "space-shooter-canvas">
                        <div id = "ss-title-screen">
                            <div id = "ss-game-title-div">
                                <div id = "ss-game-logo-area">
                                    <img src = "Images/Space/logo.png" className="hide" id = "ss-game-logo"></img>
                                    <div id = "ss-game-logo-div">
                                    </div>
                                </div>
                                <div id = "ss-game-madeby-div">
                                    <p id = "ss-game-madeby">Por Eric Nunes</p>
                                </div>
                            </div>
                            <div className = "ss-main-menu-buttons-divs" id = "ss-game-start-button-div">
                                <button type = "button" className = "ss-main-menu-buttons" id = "ss-game-start-button" onClick = {() => startGame()}>Iniciar</button>
                            </div>
                            <div className = "ss-main-menu-buttons-divs" id = "ss-level-select-button-div">
                                <button type = "button" className = "ss-main-menu-buttons" id = "ss-level-select-button" onClick = {() => levelSelectMenu()} tabIndex={-1}>Fases</button>
                            </div>
                            <div className = "ss-main-menu-buttons-divs" id = "ss-level-select-button-div">
                                <button type = "button" className = "ss-main-menu-buttons 1p" id = "ss-players-active-button" onClick = {() => changePlayersActive()} tabIndex={-1}>1 jogador</button>
                            </div>
                            <div className = "ss-main-menu-buttons-divs" id = "ss-configs-button-div">
                                <button type = "button" className = "ss-main-menu-buttons" id = "ss-configs-button" onClick = {() => openConfigsMenu()} tabIndex={-1}>Configurações</button>
                            </div>
                        </div>
                        <div className = "closed" id = "ss-level-select-menu">
                            <div id = "ss-level-select-bar">
                                <div id = "ss-level-bar-close-div">
                                    <button type = "button" id = "ss-level-bar-close-button" onClick = {() => levelSelectMenu()}>
                                        <img id = "ss-level-bar-close-button-image" src = "Images/spaceshooter/x.png"></img>
                                    </button>
                                </div>
                                <div id = "ss-level-select-bar-title-div">
                                    <p id = "ss-level-bar-title">Fases</p>
                                </div>
                                <div id = "ss-level-select-bar-stars-div">
                                    <img id = "ss-level-bar-star-image" src = "Images/Space/star.png"></img>
                                    <p id = "star-count">0</p>
                                </div>
                            </div>
                            <CreateLevelSelectButtons/>
                            <div id = "ss-level-select-details-area">
                                <div id = "ss-level-select-details-div">
                                    <div id = "ss-level-select-details-title-div">
                                        <h1 id = "ss-level-select-details-title"></h1>
                                    </div>
                                    <div id = "ss-level-select-details-description-div">
                                        <p id = "ss-level-select-details-description"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Div das configurações */}
                        <div className = "closed" id = "ss-configs-div">
                            <div id = "ss-configs-bar">
                                <div id = "ss-configs-bar-close-div">
                                    <button type = "button" id = "ss-configs-bar-close-button" onClick = {() => openConfigsMenu()}>
                                        <img id = "ss-configs-bar-close-button-image" src = "Images/spaceshooter/x.png"></img>
                                    </button>
                                </div>
                                <div id = "ss-configs-bar-title-div">
                                    <p id = "ss-configs-title">Configurações</p>
                                </div>
                            </div>
                            <div id = "ss-configs-container">
                                <div className = "ss-configs-main-divs" id = "ss-configs-controls-main-div">
                                    <div className = "ss-configs-buttons-divs" id = "ss-config-controls-button-div">
                                        <button type = "button" className = "ss-configs-buttons" id = "ss-config-button-controls">
                                            <div className = "ss-configs-buttons-flex">
                                                <div className = "ss-configs-buttons-icons-divs">
                                                    <img className = "ss-configs-buttons-icons" src = "Images/spaceshooter/svgs/gear.svg" width = {40} height = {40}></img>
                                                </div>
                                                <div className = "ss-configs-buttons-texts-divs">
                                                    <div className = "ss-configs-buttons-titles-divs">
                                                        <p className = "ss-configs-buttons-titles" id = "ss-config-button-title-controls">Controles</p>
                                                    </div>
                                                    <div className = "ss-configs-buttons-subtitles-divs">
                                                        <p className = "ss-configs-buttons-subtitles" id = "ss-config-button-subtitle-controls">Altere os controles do jogo</p>
                                                    </div>
                                                </div>
                                                <div className = "ss-configs-buttons-arrows-divs">
                                                    <img className = "ss-configs-buttons-arrows closed" src = "https://i.imgur.com/nN1rks7.png" width = {20} height = {20}></img>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className = "ss-configs-aba-divs closed" id = "ss-config-aba-controls">
                                        <div className = "ss-player-controls-divs" id = "ss-player-0-controls-div">
                                            <div className = "ss-player-details-flex">
                                                <div className = "ss-player-ship-divs" id = "ss-player-0-ship-div">
                                                    <img className = "ss-player-ship-images" src = "Images/Space/players/player(0).png"></img>
                                                </div>
                                                <div className = "ss-player-label-divs" id = "ss-player-0-label-div">
                                                    <p className = "ss-player-labels" id = "ss-player-0-label">Jogador 1</p>
                                                </div>
                                            </div>
                                            <div className = "ss-player-controls-container">
                                                <button className = "ss-player-control-divs" id = "ss-player-0-left-button" onClick = {() => changePlayerControls(0, `left`)}>
                                                    <div className = "ss-player-control-image-divs">
                                                        <img className = "ss-player-control-images" src = "Images/Space/icons/arrowLeft.png" width = {40} height = {40}></img>
                                                    </div>
                                                    <div className = "ss-player-control-span-divs">
                                                        <span type = "button" className = "ss-player-control-spans" id = "ss-player-0-left-span">{`<`}</span>
                                                    </div>
                                                </button>
                                                <button className = "ss-player-control-divs" id = "ss-player-0-shot-button" onClick = {() => changePlayerControls(0, `shot`)}>
                                                    <div className = "ss-player-control-image-divs">
                                                        <img className = "ss-player-control-images" src = "Images/Space/icons/shot.png" width = {40} height = {40}></img>
                                                    </div>
                                                    <div className = "ss-player-control-span-divs">
                                                        <span type = "button" className = "ss-player-control-spans" id = "ss-player-0-shot-span">Space</span>
                                                    </div>
                                                </button>
                                                <button className = "ss-player-control-divs" id = "ss-player-0-right-button" onClick = {() => changePlayerControls(0, `right`)}>
                                                    <div className = "ss-player-control-image-divs">
                                                        <img className = "ss-player-control-images" src = "Images/Space/icons/arrowRight.png" width = {40} height = {40}></img>
                                                    </div>
                                                    <div className = "ss-player-control-span-divs">
                                                        <span type = "button" className = "ss-player-control-spans" id = "ss-player-0-right-span">{`>`}</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className = "ss-player-controls-divs" id = "ss-player-1-controls-div">
                                            <div className = "ss-player-details-flex">
                                                <div className = "ss-player-ship-divs" id = "ss-player-1-ship-div">
                                                    <img className = "ss-player-ship-images" src = "Images/Space/players/player(1).png"></img>
                                                </div>
                                                <div className = "ss-player-label-divs" id = "ss-player-1-label-div">
                                                    <p className = "ss-player-labels" id = "ss-player-1-label">Jogador 2</p>
                                                </div>
                                            </div>
                                            <div className = "ss-player-controls-container">
                                                <button className = "ss-player-control-divs" id = "ss-player-1-left-button" onClick = {() => changePlayerControls(1, `left`)}>
                                                    <div className = "ss-player-control-image-divs">
                                                        <img className = "ss-player-control-images" src = "Images/Space/icons/arrowLeft.png" width = {40} height = {40}></img>
                                                    </div>
                                                    <div className = "ss-player-control-span-divs">
                                                        <span type = "button" className = "ss-player-control-spans" id = "ss-player-1-left-span">A</span>
                                                    </div>
                                                </button>
                                                <button className = "ss-player-control-divs" id = "ss-player-1-shot-button" onClick = {() => changePlayerControls(1, `shot`)}>
                                                    <div className = "ss-player-control-image-divs">
                                                        <img className = "ss-player-control-images" src = "Images/Space/icons/shot.png" width = {40} height = {40}></img>
                                                    </div>
                                                    <div className = "ss-player-control-span-divs">
                                                        <span type = "button" className = "ss-player-control-spans" id = "ss-player-1-shot-span">S</span>
                                                    </div>
                                                </button>
                                                <button className = "ss-player-control-divs"  id = "ss-player-1-right-button" onClick = {() => changePlayerControls(1, `right`)}>
                                                    <div className = "ss-player-control-image-divs">
                                                        <img className = "ss-player-control-images" src = "Images/Space/icons/arrowRight.png" width = {40} height = {40}></img>
                                                    </div>
                                                    <div className = "ss-player-control-span-divs">
                                                        <span type = "button" className = "ss-player-control-spans" id = "ss-player-1-right-span">D</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = "closed" id = "ss-level-card-div">
                            <div className = "closed" id = "ss-level-card-flag"></div>
                            <div className = "closed" id = "ss-level-card-description-flag"></div>
                            <div className = "closed" id = "ss-level-card-name-div">
                                <div id = "ss-level-card-name"></div>
                            </div>
                            <div className = "closed" id = "ss-level-card-description-div">
                                <div id = "ss-level-card-description"></div>
                            </div>
                        </div>
                        <div id = "ss-background-frames"></div>
                        <div className = "closed" id = "ss-freeze"></div>
                        <div id = "ss-game-area">
                            <div id = "ss-hud">
                                <CreateWeaponHud/>
                                <div id = "ss-time-div">
                                    <p id = "ss-time">0</p>
                                    <div id = "ss-clock">
                                        <div id = "ss-clock-decoration">
                                            <span id = "ss-clock-hand"></span>
                                            <span className = "ss-clock-dots"></span>
                                            <span className = "ss-clock-dots"></span>
                                            <span className = "ss-clock-dots"></span>
                                            <span className = "ss-clock-dots"></span>
                                            <span className = "ss-clock-dots"></span>
                                            <span className = "ss-clock-dots"></span>
                                            <span className = "ss-clock-dots"></span>
                                            <span className = "ss-clock-dots"></span>
                                        </div>
                                    </div>
                                </div>
                                <div id = "ss-right-hud">
                                    <CreatePointsHud/>
                                    <div id = "ss-missions-div">
                                        <img id = "ss-mission-icon" alt = "mission-icon"></img>
                                        <p id = "ss-mission-text"></p>
                                    </div>
                                </div>
                                <div className = "closed" id = "ss-race-bar-div">
                                    <div id = "ss-race-bar"></div>
                                </div>
                                <div className = "closed" id = "ss-restart-div">
                                    <div className = "closed" id = "ss-victory-area">
                                        <div id = "ss-victory-text-div">
                                            <h1 id = "ss-victory-text">Vitória!</h1>
                                        </div>
                                        <div id = "ss-victory-scores-div">
                                            <div className = "ss-scores-divs" id = "player-score-div">
                                                <div className = "ss-score-name-divs">
                                                    <p className = "ss-score-names" id = "ss-player-score">Pontos:</p>
                                                </div>
                                                <div className = "ss-score-results-divs">
                                                    <div id = "player-score-results-div"></div>
                                                </div>
                                            </div>
                                            <div className = "ss-scores-divs" id = "life-score-div">
                                                <div className = "ss-score-name-divs">
                                                    <p className = "ss-score-names" id = "ss-life-score">Vidas:</p>
                                                </div>
                                                <div className = "ss-score-results-divs">
                                                    <div id = "life-score-icons-div"></div>
                                                    <div id = "life-score-results-div"></div>
                                                </div>
                                            </div>
                                            <div className = "ss-scores-divs" id = "shots-score-div">
                                                <div className = "ss-score-name-divs">
                                                    <p className = "ss-score-names" id = "ss-shot-score">Balas:</p>
                                                </div>
                                                <div className = "ss-score-results-divs">
                                                    <div id = "shot-score-icons-div">
                                                        <img id = "shot-score-icon" src = "Images/spaceshooter/guns/gun(0).gif"></img>
                                                    </div>
                                                    <div id = "shot-score-results-div"></div>
                                                </div>
                                            </div>
                                            <div className = "ss-scores-divs" id = "time-score-div">
                                                <div className = "ss-score-name-divs">
                                                    <p className = "ss-score-names" id = "ss-time-score">Tempo:</p>
                                                </div>
                                                <div className = "ss-score-results-divs">
                                                    <div id = "time-score-icons-div">
                                                        <img id = "time-score-icon" src = "Images/spaceshooter/clock.gif"></img>
                                                    </div>
                                                    <div id = "time-score-results-div"></div>
                                                </div>
                                            </div>
                                            <div className = "ss-scores-divs" id = "total-score-div">
                                                <div className = "ss-score-name-divs">
                                                    <p className = "ss-score-names" id = "ss-total-score">Total:</p>
                                                </div>
                                                <div className = "ss-score-results-divs">
                                                    <div id = "total-score-results-div"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id = "ss-victory-stars-div">
                                            <div id = "ss-star-bar">
                                                <div id = "star-bar-percent"></div>
                                            </div>
                                            <div id = "ss-stars-main-div">
                                                <div className = "ss-stars-divs gray" id = "star-0">
                                                    <div className = "ss-stars-labels closed" id = "star-label-0"></div>
                                                    <img className = "ss-stars-images" id = "star-image-0" src = "Images/Space/star.png"></img>
                                                </div>
                                                <div className = "ss-stars-divs gray" id = "star-1">
                                                    <div className = "ss-stars-labels closed" id = "star-label-1"></div>
                                                    <img className = "ss-stars-images" id = "star-image-1" src = "Images/Space/star.png"></img>
                                                </div>
                                                <div className = "ss-stars-divs gray" id = "star-2">
                                                    <div className = "ss-stars-labels closed" id = "star-label-2"></div>
                                                    <img className = "ss-stars-images" id = "star-image-2" src = "Images/Space/star.png"></img>
                                                </div>
                                            </div>
                                        </div>
                                        <div className = "ss-menu-button-divs" id = "ss-victory-button-div">
                                            <button type = "button" className = "ss-menu-buttons" id = "ss-victory-button" onClick = {() => nextLevel()}>Avançar</button>
                                        </div>
                                        <div className = "ss-menu-button-divs" id = "ss-restart-button-div">
                                            <button type = "button" className = "ss-menu-buttons" id = "ss-restart-button" onClick = {() => restartGame()}>Reiniciar</button>
                                        </div>
                                        <div className = "ss-menu-button-divs">
                                            <button type = "button" className = "ss-menu-buttons" id = "ss-home-button" onClick = {() => menuBack()}>Menu</button>
                                        </div>
                                    </div>
                                    <div className = "closed" id = "ss-defeat-area">
                                        <div id = "ss-defeat-area">
                                            <div id = "ss-defeat-text-div">
                                                <p id = "ss-defeat-text">Você perdeu!</p>
                                            </div>
                                            <div id = "ss-defeat-button-div">
                                                <button type = "button" className = "ss-menu-buttons" id = "ss-restart-button" onClick = {() => restartGame()}>Reiniciar</button>
                                            </div>
                                            <div className = "ss-menu-button-divs">
                                                <button type = "button" className = "ss-menu-buttons" id = "ss-home-button" onClick = {() => menuBack()}>Menu</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id = "ss-controls">
                        <div id = "ss-controls-div">
                            <button className = "ss-controls-buttons" type = "button" onClick = {() => pauseGame()}>
                                <img className = "ss-controls-buttons-icons" src = "Images/spaceshooter/svgs/pause.svg"></img>
                            </button>
                            {/*<button className = "ss-controls-buttons" type = "button" onClick = {() => playerShot(0)}>
                                <img className = "ss-controls-buttons-icons" src = "Images/Space/icons/shot.png"></img>
                            </button>
                            <button className = "ss-controls-buttons" type = "button" onClick = {() => movePlayer("right")}>
                                <img className = "ss-controls-buttons-icons" src = "Images/spaceshooter/svgs/pause.svg"></img>
    </button>*/}
                        </div>
                        <div id = "ss-hide-area">
                            <div id = "ss-hide-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};