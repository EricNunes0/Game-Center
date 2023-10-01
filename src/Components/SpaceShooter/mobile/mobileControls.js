import mobileControlsHide from "./mobileControlsHide";
import mobileControlsShow from "./mobileControlsShow";

export default function mobileControls(boolean) {
    //console.log(boolean, typeof boolean);
    if(!(typeof boolean === "boolean")) {
        console.error("mobileControls");
        let firstMobileButton = document.querySelector(".ss-mobile-button-divs");
        if(firstMobileButton.className.includes("closed")) {
            mobileControlsShow();
        } else {
            mobileControlsHide();
        };
    } else {
        if(boolean === true) {
            mobileControlsShow();
        } else if(boolean === false) {
            mobileControlsHide();
        };
    };
};