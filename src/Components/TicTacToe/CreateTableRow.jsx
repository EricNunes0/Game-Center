import CreateTableData from "./CreateTableData";

export default function CreateTableRow({id}) {
    let rows = [];
    for(let i = 0; i <= 2; i++) {
        rows.push(CreateTableData({id: (i + 1) + (id * 3)}));
    };

    return (
        <tr className = "ttt-rows" key = {id}>
            {rows}
        </tr>
    );
};