import { useImmer } from "use-immer";
import { useState } from "react";

export default function Task() {

    const [item, setItem] = useState("");
    const [items, setItems] = useImmer([]);

    function handleChange(e) {
        setItem(e.target.value);
        //console.log(item);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setItems(draft => {
            draft.push({
                id: Math.floor(Math.random() * 100000).toString().substr(0, 5),
                name: item,
                completed: false
            });
        });
        setItem("");
    }

    console.log(items);

    return (
        <div>
            <h1>Task</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={item} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.id} - {item.name} - {item.completed ? "Completed" : "Not Completed"}
                    </li>
                ))}
            </ul>
        </div>
    );
}