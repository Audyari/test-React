import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Task from "../task/Task"
import TaskDua from "../task/TaskDua"
import TaskForm from "../task/TaskForm"
import TaskUpdate from "./TaskUpdate";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* <TaskDua />
        <Task /> */}

        {/* < TaskForm /> */}

        < TaskUpdate />
    </StrictMode>
)