import forcaJSON from "../../Settings/forca.json";

export default function ForcaTeclas() {
    let rows = [];
    for(let row of forcaJSON.keys) {
        rows.push(createTeclaRow(row));
    }
    return (
        <div id = "forca-teclas-div">
            {rows}
        </div>
    )
}

function createTeclaDiv(key) {
    return(
        <div className = "forca-tecla-divs" id = {`forca-tecla-div-${key}`} key = {key}>
            <button type = "button" className = {`forca-tecla-buttons ${forcaJSON.theme}`} id = {`${key.toUpperCase()}`}>
                <span className = "forca-tecla-keys" id = {`key-${key}`}>{key.toUpperCase()}</span>
            </button>
        </div>
    )
}

function createTeclaRow(row) {
    let keys = [];
    for(let key of row) {
        keys.push(createTeclaDiv(key))
    }
    return(
        <div className = "forca-tecla-rows">
            {keys}
        </div>
    )
}