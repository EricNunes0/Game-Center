import forcaJSON from "../../Settings/forca.json";

export default function typeEdit() {
    if(document.getElementById("type-span")) {
        document.getElementById("type-span").innerText = forcaJSON.categorieSelected;
    }
}