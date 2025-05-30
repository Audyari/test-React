import { useState } from "react";

export default function TaskForm({ onSubmit }) {
    const [item, setItem] = useState("");

    function handleChange(e) {
        setItem(e.target.value);
    }

    function handleClick(e) {
        e.preventDefault();
        if (item.trim() === "") {
            return;
        }
        onSubmit(item);
        setItem("");
    }

    return (
        <>
            <h1>Create Task</h1>
            <form>
                <input type="text" value={item} onChange={handleChange} />
                <button type="button" onClick={handleClick}>Add</button>
            </form>
        </>
    );
}