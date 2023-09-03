import editForcaSVG from "./editForcaSVG";

export default function checkForcaLifes(lifes) {
    switch(lifes) {
        case(5):
            editForcaSVG(1);
            break;
        case(4):
            editForcaSVG(2);
            break;
        case(3):
            editForcaSVG(3);
            break;
        case(2):
            editForcaSVG(4);
            break;
        case(1):
            editForcaSVG(5);
            break;
        case(0):
            editForcaSVG(6);
            break;
        default:
            editForcaSVG(0);
            break;
    }
}