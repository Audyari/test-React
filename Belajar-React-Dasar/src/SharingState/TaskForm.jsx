import { useImmer } from "use-immer";

export default function TaskForm({ onSubmit }) {

    const [item, updateItem] = useImmer("");

    function handleChange(e) {
        updateItem(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(item); // Kirim nilai ke parent
        updateItem(""); // Reset input
      }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={item} onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    );
}