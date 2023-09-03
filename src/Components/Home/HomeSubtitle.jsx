import homeJSON from "../../Settings/home.json";

export default function HomeSubtitle() {
    const subtitle = homeJSON.subtitles[Math.floor(Math.random() * homeJSON.subtitles.length)];
    return (
        <div id = "subtitle-div">
            <p id = "home-subtitle">{subtitle}</p>
        </div>
    );
}