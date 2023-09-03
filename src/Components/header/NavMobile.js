export default function NavMobile() {
    const navMobile = document.querySelector("#nav-mobile");
    const mobileButton = document.querySelector("#nav-mobile-button");
    const mobileIcon = document.querySelector("#nav-mobile-icon");

    if(navMobile.className.includes(`closed`)) {
        navMobile.classList.remove(`closed`);
        mobileButton.classList.add(`open`);
        mobileIcon.classList.add(`open`);
    } else {
        navMobile.classList.add(`closed`);
        mobileButton.classList.remove(`open`);
        mobileIcon.classList.remove(`open`);
    }
};