import TTTChangeTheme from "./TTTChangeTheme";
import changeGamemode from "./changeGamemode";
import clearPlacar from "./clearPlacar";
import colorMenu from "./colorMenu";
import helpMenu from "./helpMenu";
import muteGame from "./muteGame";
import insert from "./insert";
import resetGame from "./resetGame";

export default function keyboardListener() {
    console.log("keyboardListener.js carregado");
    document.addEventListener("keydown", (e) => {
        let name = e.key.toLowerCase();
        switch(name) {
            case "1":
                insert("1");
                break;
            case "2":
                insert("2");
                break;
            case "3":
                insert("3");
                break;
            case "4":
                insert("4");
                break;
            case "5":
                insert("5");
                break;
            case "6":
                insert("6");
                break;
            case "7":
                insert("7");
                break;
            case "8":
                insert("8");
                break;
            case "9":
                insert("9");
                break;
            case "r":
                resetGame();
                break;
            case "c":
                clearPlacar();
                break;
            case "g":
                changeGamemode();
                break;
            case "t":
                TTTChangeTheme();
                break;
            case "h":
                helpMenu();
                break;
            case "m":
                muteGame();
                break;
            case "p":
                colorMenu();
                break;
            default:
                break;
        }
    });
};