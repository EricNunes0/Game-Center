import "./Home.css";
import HomeGamesAvailable from "./HomeGamesAvailable";
import HomeScroll from "./HomeScroll";
import HomeSubtitle from "./HomeSubtitle";

export default function Home() {
    return (
        <div id = "home-page">
            <div id = "home-container">
                <section className = "home-sections" id = "home-main-section">
                    <span className = "section-spans" id = "section-span-0"></span>
                    <span className = "section-spans" id = "section-span-1"></span>
                    <span className = "section-spans" id = "section-span-2"></span>
                    <span className = "section-spans" id = "section-span-3"></span>
                    <span className = "section-spans" id = "section-span-4"></span>
                    <span className = "section-spans" id = "section-span-5"></span>
                    <span className = "section-spans" id = "section-span-6"></span>
                </section>
                <div id = "home-main-container">
                    <div id = "home-main-flex">
                        <div id = "home-main-texts-div">
                            <div id = "home-texts-div">
                                <div id = "home-title-div">
                                    <p id = "home-title">Game Center</p>
                                </div>
                                <div id = "home-subtitle-div">
                                    <HomeSubtitle></HomeSubtitle>
                                </div>
                            </div>
                        </div>
                        <div id = "home-main-button-div">
                            <div id = "home-button-div">
                                <button type = "button" className = "home-buttons" id = "home-button" onClick={() => HomeScroll("home-games-container")}>Começar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id = "home-arrow-container">
                    <div id = "home-arrow-main-div">
                        <div className = "home-arrows-divs">
                            <img className = "home-arrows-images" id = "home-arrow-0" src = "https://i.imgur.com/cb7E2P8.png" alt = "HomeArrow1"/>
                        </div>
                        <div className = "home-arrows-divs">
                            <img className = "home-arrows-images" id = "home-arrow-1" src = "https://i.imgur.com/cb7E2P8.png" alt = "HomeArrow1"/>
                        </div>
                    </div>
                </div>
            </div>
            <div id = "home-games-container">
                <div id = "home-games-main-container">
                    <div id = "home-games-area">
                        <div id = "games-area-flex">
                            <div id = "games-area-title-div">
                                <p id = "games-area-title">Jogos disponíveis</p>
                            </div>
                            <div id = "games-area-description-div">
                                <p id = "games-area-description">Clique nas cartas abaixo para revelar os jogos</p>
                            </div>
                            <div id = "available-games-container">
                                <HomeGamesAvailable></HomeGamesAvailable>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}