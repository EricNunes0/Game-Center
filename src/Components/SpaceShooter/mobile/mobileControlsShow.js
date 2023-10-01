export default function mobileControlsShow() {
    const mobileControls = document.querySelectorAll(".ss-mobile-button-divs");
    const mobileSwitch = document.querySelector("#ss-mobile-switch");
    mobileSwitch.classList.remove("off");
    mobileSwitch.classList.add("on");
    let wait = 0;
    for(const control of mobileControls) {
        setTimeout(function() {
            control.classList.remove("closed");
        }, wait * 1000);
        wait += 0.2;
    };
};