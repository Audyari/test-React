export default function TaskList({ items = [] }) {
    return (
        <>
        <h1>Task List</h1>
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        </>
    );
}