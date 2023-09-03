import TTTJSON from "../../Settings/tictactoe.json";
import insert from "./insert";

export default function CreateTableData({id}) {
    return (
        <td>
            <button className = {`ttt-buttons ${TTTJSON.theme} gray default`} id = {`ttt-${id}`} onClick = {() => insert(id)}>{id}</button>
        </td>
    );
};