export default function HomeScroll(id) {
    const elementToScroll = document.getElementById(id);
    if(elementToScroll) {
        console.log(elementToScroll)
        elementToScroll.scrollIntoView({behavior: "smooth"});
    } else {
        console.error("Não há nenhum elemento com este id!");
    };
}