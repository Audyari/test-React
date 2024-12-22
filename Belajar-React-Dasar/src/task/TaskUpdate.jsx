import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function TaskUpdate() {

    const [items, setItems] = useImmer([]);

    function handleSubmit(item) {
        setItems(draft => {
            draft.push(item);
        });
    }

    return (
        <>
            <TaskForm onSubmit={handleSubmit} />
            <TaskList items={items} />
        </>
    )
}