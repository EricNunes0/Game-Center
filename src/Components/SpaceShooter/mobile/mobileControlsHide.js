export default function mobileControlsHide() {
    const mobileControls = document.querySelectorAll(".ss-mobile-button-divs");
    const mobileSwitch = document.querySelector("#ss-mobile-switch");
    mobileSwitch.classList.remove("on");
    mobileSwitch.classList.add("off");
    let wait = 0;
    for(const control of mobileControls) {
        setTimeout(function() {
            control.classList.add("closed");
        }, wait * 1000);
        wait += 0.2;
    };
};