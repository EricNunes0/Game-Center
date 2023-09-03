import CreateTableRow from "./CreateTableRow";

export default function CreateTable() {
    let rows = [];
    for(let i = 0; i <= 2; i++) {
        rows.push(CreateTableRow({id: i}));
    };

    return (
        <table id = "ttt-table">
            <tbody id = "ttt-tbody">
                {rows}
            </tbody>
        </table>
    )
};