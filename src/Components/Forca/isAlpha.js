export default function isAlpha(letter) {
    const isAlpha = /^[a-zA-ZçÇ]+$/.test(letter);
    return isAlpha;
};