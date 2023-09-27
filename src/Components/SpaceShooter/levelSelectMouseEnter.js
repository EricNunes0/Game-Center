export default function levelSelectMouseEnter({buttonId, title, description}) {
    const levelButton = document.querySelector(`#${buttonId}`);
    const levelSelectTitle = document.querySelector("#ss-level-select-details-title");
    const levelSelectDescription = document.querySelector("#ss-level-select-details-description");
    if(levelButton) {
        if(!levelButton.className.includes(`closed`)) {
            levelSelectTitle.innerHTML = title;
            levelSelectDescription.innerHTML = description;
        };
    };
};