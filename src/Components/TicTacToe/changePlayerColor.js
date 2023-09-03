import editPlayerColor from "./editPlayerColor";

export default function changePlayerColor(player) {
    console.log("changePlayerColor");
    const colorToChange = document.getElementById(`color-p${player}`);
    if(colorToChange) {
        let val = colorToChange.value;
        document.getElementById(`color-square-${player}`).style.backgroundColor = val;
        document.getElementById(`p${player}-area`).style.backgroundColor = val;
        if(document.getElementById(`player-span-${player}`)) {
            document.getElementById(`player-span-${player}`).style.color = val;
        };
        editPlayerColor(player, val);
    };
};