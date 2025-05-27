import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
    const [items, setItems] = useState([]);

    function handleAddItem(newItem) {
        setItems([...items, {
          id: Date.now(),
          name: newItem,
          completed: false
        }]);
      }

    console.log(items);
    return (
       <>
       <TaskForm onSubmit={handleAddItem} />
       <TaskList items={items} />
       </>
    );
}