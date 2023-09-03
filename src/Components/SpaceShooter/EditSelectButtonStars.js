export default function EditSelectButtonStars(id, stars) {
    const selectButton = document.getElementById(`level-select-button-${id}`);

    for(let star of stars) {
        let starsMain = selectButton.querySelector(".level-select-stars-main");
        let starDiv = starsMain.querySelector(`#level-select-stars-div-${star}`);
        starDiv.classList.remove("gray");
    };
};