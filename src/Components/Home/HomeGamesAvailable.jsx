import homeJSON from "../../Settings/home.json";
import HomeCard from "./HomeCard";

function generateGameDiv(game) {
    let redirectUrl = game.route, redirectClassName = "play-button-links";
    if(game.disabled) {
        if(game.disabled === true) {
            redirectUrl = "";
            redirectClassName = `${redirectClassName} disabled`;
        }
    }
    console.log(redirectUrl)
    return (
        <div className = "games-available-divs" key = {game.id}>
            <button className = "cards backwards" id = {`card-${game.id}`} onClick = {() => HomeCard(game.id)}></button>
            <header className = "games-available-headers closed" id = {`header-${game.id}`}>
                <div className = "card-icon-top-divs">
                    <div className = "card-icon-top-area">
                        <div className = "card-icon-top-image-divs">
                            <img className = "card-icon-top" src = {`${game.naipe}`} alt = {`card-icon-${game.naipe}`}/>
                        </div>
                        <div className = "card-icon-top-number-divs">
                            <p className = {`card-numbers ${game.cardNumberColor}`}><b>{game.cardNumber}</b></p>
                        </div>
                    </div>
                </div>
                <div className = "games-available-informations-flex">
                    <div className = "games-headers-flex">
                        <div className = "game-icons-divs">
                            <img className = "game-available-icons" src = {game.icon} alt = {game.title}/>
                        </div>
                        <div className = "game-names-divs">
                            <p className = "game-names">{game.name}</p>
                        </div>
                    </div>
                    <div className = "game-images-divs">  
                        <img className = "game-available-images" src = {game.image} alt = {game.title}/>
                    </div>
                    <div className = "game-description-divs">  
                        <p className = "game-available-descriptions">{game.description}</p>
                    </div>
                    <div className = "game-play-button-divs">
                        <a href = {redirectUrl} className = {redirectClassName} id = {`play-button-link-${game.id}`}  target = "_blank">
                            <button type = "button" className = "play-buttons" id = {`play-button-${game.id}`}>
                                <img className = "play-buttons-images" id = {`play-button-image-${game.id}`} src = "https://cdn-icons-png.flaticon.com/512/0/375.png"/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className = "card-icon-bottom-divs">
                    <div className = "card-icon-bottom-area">
                        <div className = "card-icon-bottom-image-divs">
                            <img className = "card-icon-bottom" src = {`${game.naipe}`} alt = {`card-icon-${game.naipe}`}/>
                        </div>
                        <div className = "card-icon-bottom-number-divs">
                            <p className = {`card-numbers ${game.cardNumberColor}`}><b>{game.cardNumber}</b></p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default function HomeGamesAvailable() {
    let rows = [];
    for(let game of homeJSON.gamesAvailable) {
        rows.push(generateGameDiv(game));
    }
    return (
        <div id = "available-games-divs">
            {rows}
        </div>
    )
}