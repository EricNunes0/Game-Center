export default function disablePauseButton(boolean) {
    const pauseButton = document.querySelector("#ss-pause-button");
    pauseButton.disabled = boolean;
};