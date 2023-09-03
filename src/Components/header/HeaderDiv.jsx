import "./HeaderDiv.css";
import HeaderManage from "./HeaderManage";
import NavMobile from "./NavMobile";

export default function HeaderDiv({color, closed}) {

    
    return (
        <div className = {closed} id = "gamecenter-header">
            <nav className = {color} id = "gamecenter-header-nav">
                <div id = "games-list-div">
                    <div className = "games-links-divs">
                        <a className = "header-links" href = "/">
                            <div className = "header-links-images-divs">
                                <img className = "header-links-images" src = "img_GC192.png" alt = "GC192"/>
                            </div>
                            <div className = "links-texts-divs">
                                <p className = "header-links-texts">Início</p>
                            </div>
                        </a>
                        <a className = "header-links" href = "/tictactoe">
                            <div className = "header-links-images-divs">
                                <img className = "header-links-images" src = "Images/icons/img_tictactoe.png" alt = "img_TicTacToe"/>
                            </div>
                            <div className = "links-texts-divs">
                                <p className = "header-links-texts">Jogo da Velha</p>
                            </div>
                        </a>
                        <a className = "header-links" href = "/minesweeper">
                            <div className = "header-links-images-divs">
                                <img className = "header-links-images" src = "Images/icons/img_minesweeper.png" alt = "img_Minesweeper"/>
                            </div>
                            <div className = "links-texts-divs">
                                <p className = "header-links-texts">Campo Minado</p>
                            </div>
                        </a>
                        <a className = "header-links" href = "/forca">
                            <div className = "header-links-images-divs">
                                <img className = "header-links-images" src = "Images/icons/img_forca.png" alt = "img_Forca"/>
                            </div>
                            <div className = "links-texts-divs">
                                <p className = "header-links-texts">Forca</p>
                            </div>
                        </a>
                        <a className = "header-links" href = "/spaceshooter">
                            <div className = "header-links-images-divs">
                                <img className = "header-links-images" src = "Images/icons/img_spaceshooter.png" alt = "img_Spaceshooter"/>
                            </div>
                            <div className = "links-texts-divs">
                                <p className = "header-links-texts">Space Shooter</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className = "closed" id = "nav-header-mobile">
                    <div id = "nav-mobile-button-div">
                        <button type = "button" id = "nav-mobile-button" onClick = {() => {NavMobile()}}>
                            <svg id = "nav-mobile-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                            </svg>
                        </button>
                    </div>
                    <div className = "closed" id = "nav-mobile">
                        <div className = {color} id = "nav-mobile-links-div">
                            <div className ="nav-mobile-links-divs">
                                <a className = "nav-mobile-links" href = "/">
                                    Início
                                </a>
                            </div>
                            <div className ="nav-mobile-links-divs">
                                <a className = "nav-mobile-links" href = "/tictactoe">
                                    Tictactoe
                                </a>
                            </div>
                            <div className ="nav-mobile-links-divs">
                                <a className = "nav-mobile-links" href = "/minesweeper">
                                    Minesweeper
                                </a>
                            </div>
                            <div className ="nav-mobile-links-divs">
                                <a className = "nav-mobile-links" href = "/forca">
                                    Forca
                                </a>
                            </div>
                            <div className ="nav-mobile-links-divs">
                                <a className = "nav-mobile-links" href = "/spaceshooter">
                                    Space Shooter
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div id = "nav-close-div">
                <button type = "button" className = {color} id = "nav-close-button" onClick = {() => {HeaderManage()}}>
                    <img width = {18} height = {10} className = {closed} id = "nav-close-arrow" src = "Images/nav/img_arrow.png" alt = "arrow"></img>
                </button>
            </div>
        </div>
    );
};