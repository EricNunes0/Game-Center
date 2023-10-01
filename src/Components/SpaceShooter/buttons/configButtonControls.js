export default function configButtonControls() {
    const configArea = document.querySelector("#ss-config-aba-controls");
    const configArrow = document.querySelector("#ss-config-arrow-controls");
    if(configArea.className.includes("closed")) {
        configArea.classList.remove("closed");
        configArrow.classList.remove("closed");
    } else {
        configArea.classList.add("closed");
        configArrow.classList.add("closed");
    };
};