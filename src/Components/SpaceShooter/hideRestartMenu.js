export default function hideRestartMenu() {
    document.querySelector("#ss-restart-div").classList.add("closed");
    document.querySelector("#ss-victory-area").classList.add("closed");
    document.querySelector("#ss-defeat-area").classList.add("closed");
};