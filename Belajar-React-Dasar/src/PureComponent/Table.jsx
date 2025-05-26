import Row from "./Row";
import Row1 from "./Row1";

export default function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                <Row text={{ id: 1, name: "Row 1" }} />
                <Row text={{ id: 2, name: "Row 2" }} />
                <Row text={{ id: 3, name: "Row 3" }} />
            </tbody>
            <tbody>
                <Row1 id={4} name="Row 4" />
                <Row1 id={5} name="Row 5" />
                <Row1 id={6} name="Row 6" />
            </tbody>
        </table>
    )
}