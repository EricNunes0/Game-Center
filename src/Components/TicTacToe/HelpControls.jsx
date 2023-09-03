
import controls from "../../Settings/controls.json";

function generateControlDiv(controlCmd) {
    return (
        <div className = "controls-divs" key = {controlCmd.id}>
            <div className = "controls-images-divs">
                <img className = "controls-images light" src = {controlCmd.icon} alt = {controlCmd.title}/>
            </div>
            <div className = "controls-texts-divs">
                <div className = "controls-titles-divs">
                    <p className = "controls-titles light">{controlCmd.title}</p>
                </div>
                <div className = "controls-descriptions-divs">
                    <p className = "controls-descriptions light">{controlCmd.description}</p>
                </div>
            </div>
        </div>
    )
}

export default function HelpControls() {
    const rows = [];
    for(let control of controls.controls) {
        let row = generateControlDiv(control);
        rows.push(row);
    };
    return (
        <div id = "help-controls">
            {rows}
        </div>
    );
};