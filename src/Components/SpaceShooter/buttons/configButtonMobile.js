export default function configButtonMobile() {
    const configArea = document.querySelector("#ss-config-aba-mobile");
    const configArrow = document.querySelector("#ss-config-arrow-mobile");
    if(configArea.className.includes("closed")) {
        configArea.classList.remove("closed");
        configArrow.classList.remove("closed");
    } else {
        configArea.classList.add("closed");
        configArrow.classList.add("closed");
    };
};