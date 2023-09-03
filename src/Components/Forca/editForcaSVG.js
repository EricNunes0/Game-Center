export default function editForcaSVG(n) {
    const forcaSVG = document.getElementById("forca-svg");
    switch(n) {
        case(0):
            forcaSVG.src = "svg/forca/forca0.svg";
            break;
        case(1):
            forcaSVG.src = "svg/forca/forca1.svg";
            break;
        case(2):
            forcaSVG.src = "svg/forca/forca2.svg";
            break;
        case(3):
            forcaSVG.src = "svg/forca/forca3.svg";
            break;
        case(4):
            forcaSVG.src = "svg/forca/forca4.svg";
            break;
        case(5):
            forcaSVG.src = "svg/forca/forca5.svg";
            break;
        case(6):
            forcaSVG.src = "svg/forca/forca6.svg";
            break;
        default:
            break;
    };
};