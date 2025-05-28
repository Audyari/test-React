
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useImmer } from "use-immer";

export default function Task() {
    const [items, updateItems] = useImmer([]);

    function handleAddItem(newItem) {
        updateItems(draft => {
          draft.push({
            id: Date.now(),
            name: newItem,
            completed: false
          });
        });
      }

    //console.log(items);
    return (
       <>
       <TaskForm onSubmit={handleAddItem} />
       <TaskList items={items} />
       </>
    );
}