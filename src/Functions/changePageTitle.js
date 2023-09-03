export default function changePageIcon(name) {
    let pageTitle = document.getElementsByTagName("title");
    pageTitle[0].innerText = name;
}