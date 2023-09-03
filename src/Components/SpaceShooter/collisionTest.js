export default function collisionTest(object1, object2) {
    const gameArea = document.querySelector("#ss-game-area");
    const gameAreaOffsets = gameArea.getBoundingClientRect();
    const gameAreaTop = gameAreaOffsets.top;
    const gameAreaLeft = gameAreaOffsets.left;

    const object1Offsets = object1.getBoundingClientRect();
    const object1Top = object1Offsets.top - gameAreaTop;
    const object1Left = object1Offsets.left - gameAreaLeft;
    const object1Width = parseInt(object1.style.width.slice(0, -2));
    const object1Height = parseInt(object1.style.height.slice(0, -2));
    const object1Right = object1Left + object1Width;
    const object1Bottom = object1Top + object1Height;

    const object2Offsets = object2.getBoundingClientRect();
    const object2Top = object2Offsets.top - gameAreaTop;
    const object2Left = object2Offsets.left - gameAreaLeft;
    const object2Width = parseInt(object2.style.width.slice(0, -2));
    const object2Height = parseInt(object2.style.height.slice(0, -2));
    const object2Right = object2Left + object2Width;
    const object2Bottom = object2Top + object2Height;

    const collisionX = (object2Right >= object1Left) && (object2Left <= object1Right);
    const collisionY = (object2Bottom >= object1Top) && (object2Top <= object1Bottom);

    if(collisionX && collisionY) {
        return true;
    } else {
        return false;
    };
};