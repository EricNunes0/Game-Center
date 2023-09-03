import React from "react";
import minesweeperJSON from "../../../Settings/minesweeper.json";
import MSCloseMenu from "./MSCloseMenu";
import changeTableSize from "../changeTableSize";
import resetGame from "../resetGame";
import toggleFlagEvents from "../toggleFlagEvents";

class MSConfigsMenu extends React.Component {
    render() {
        return(
            <div id = "ms-configs-menu-container">
                <div className = "ms-config-menus closed" id = "ms-config-grade">
                    <div className = "menus-close-areas" onClick = {() => MSCloseMenu()}></div>
                    <div className = {`menus-boards ${minesweeperJSON.theme}`} id = "ms-grade-board">
                        <div id = "ms-grade-flex">
                            <div className = "ms-grade-configs-divs">
                                <div className = "ms-grade-texts-divs">
                                    <div className = "ms-grade-titles-divs">
                                        <p className = {`ms-grade-titles ${minesweeperJSON.theme}`} id = "ms-grade-width-title">Largura</p>
                                    </div>
                                    <div className = "ms-grade-descriptions-divs">
                                        <p className = {`ms-grade-descriptions ${minesweeperJSON.theme}`} id = "ms-grade-width-description">Escolha a largura da mesa</p>
                                    </div>
                                </div>
                                <div className = "ms-grade-inputs-divs" id = "ms-grade-width-div">
                                    <div className = "ms-grade-input-range-divs">
                                        <input type = "range" name = "grade-width" className = "ms-grade-inputs" id = "ms-grade-width" min = "5" max = "15" defaultValue = {9} onChange = {() => {
                                            let width = document.getElementById("ms-grade-width").value;
                                            document.getElementsByName("ms-grade-width-result")[0].innerHTML = width;
                                        }}/>
                                    </div>
                                    <div className = "ms-grade-output-range-divs">
                                        <output name = "ms-grade-width-result" htmlFor = "grade-width">9</output>
                                    </div>
                                </div>
                            </div>
                            <div className = "ms-grade-configs-divs">
                                <div className = "ms-grade-texts-divs">
                                    <div className = "ms-grade-titles-divs">
                                        <p className = {`ms-grade-titles ${minesweeperJSON.theme}`} id = "ms-grade-height-title">Altura</p>
                                    </div>
                                    <div className = "ms-grade-descriptions-divs">
                                        <p className = {`ms-grade-descriptions ${minesweeperJSON.theme}`} id = "ms-grade-height-description">Escolha a altura da mesa</p>
                                    </div>
                                </div>
                                <div className = "ms-grade-inputs-divs" id = "ms-grade-height-div">
                                    <div className = "ms-grade-input-range-divs">
                                        <input type = "range" name = "grade-height" className = "ms-grade-inputs" id = "ms-grade-height" min = "5" max = "15" defaultValue = {9} onChange = {() => {
                                            let height = document.getElementById("ms-grade-height").value;
                                            document.getElementsByName("ms-grade-height-result")[0].innerHTML = height;
                                        }}/>
                                    </div>
                                    <div className = "ms-grade-output-range-divs">
                                        <output name = "ms-grade-height-result" htmlFor = "grade-height">9</output>
                                    </div>
                                </div>
                            </div>
                            <div className = "ms-grade-confirm-div">
                                <div className = "ms-grade-confirm-button-div">
                                    <button type = "button" className = {`ms-grade-confirm-button ${minesweeperJSON.theme}`} onClick = {() => {
                                        let y = document.getElementById("ms-grade-height").value;
                                        let x = document.getElementById("ms-grade-width").value
                                        MSCloseMenu("ms-config-grade");
                                        changeTableSize(y, x);
                                        resetGame(y, x);
                                        toggleFlagEvents();
                                    }}>Confirmar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default MSConfigsMenu;