import forcaJSON from "../../Settings/forca.json";

export default function addTip(n) {
    if(n) {
        forcaJSON.tips += n;
        document.getElementById("forca-item-tip-counter").innerText = forcaJSON.tips;
    };
}