import { useState } from "react";

export default function TaskForm({ onSubmit }) {

    const [item, setItem] = useState("");

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(item); // Kirim nilai ke parent
        setItem(""); // Reset input
      }

    console.log(item);
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={item} onChange={handleChange} />
            <button type="submit">Add</button>
        </form>
    );
}