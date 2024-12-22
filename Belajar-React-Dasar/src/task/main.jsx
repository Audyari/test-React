import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Task from "../task/Task"
import TaskDua from "../task/TaskDua"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TaskDua />
        <Task />
    </StrictMode>
)