import forcaJSON from "../../Settings/forca.json";

export default function defeatEvent() {
    document.getElementById("forca-message-area").classList.remove("closed");
    document.getElementById("forca-defeat-message").classList.remove("closed");
    const answer = forcaJSON.wordLetters.join("");
    document.getElementById("forca-answer").firstChild.innerHTML = answer;
}