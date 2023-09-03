export default function explodeAllOrbs() {
    for(let orb of document.querySelectorAll(".ss-orbs")) {
        orb.remove();
    }
};