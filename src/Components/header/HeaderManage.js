import CloseHeader from "./CloseHeader";
import OpenHeader from "./OpenHeader";

export default function HeaderManage() {
    const headerDiv = document.querySelector("#gamecenter-header");
    if(headerDiv) {
        let headerVerification = headerDiv.className.includes("closed") === true ? OpenHeader() : CloseHeader();
    };
};