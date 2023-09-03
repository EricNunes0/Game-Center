export default function disableContextMenu() {
    window.addEventListener("contextmenu", e => e.preventDefault());
    window.oncontextmenu = function () {
    return false; //Desativar menu padrão
    }
}