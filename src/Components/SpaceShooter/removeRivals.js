export default function removeRivals() {
    let rivals = document.getElementsByClassName("ss-rivals");
    for(let rival of rivals) {
        rival.remove();
    };
};