import SSJSON from "../../Settings/spaceshooter.json";

export default function editLevelSelectStars() {
    const starCount = document.querySelector("#star-count");
    let totalStars = 0;
    for(const mission of SSJSON.missions) {
        for(let i = 0; i <= 2; i++) {
            if(mission.stars[i].collected === true) {
                totalStars++;
            };
        };
    };
    starCount.innerHTML = totalStars;
};