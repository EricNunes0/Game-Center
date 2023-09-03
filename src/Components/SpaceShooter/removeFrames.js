export default function removeFrames() {
    for(let frame of document.querySelectorAll(".ss-frames")) {
        frame.remove();
    }
};