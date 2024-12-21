import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import { StrictMode } from "react";
import TodoList from "../todolist/TodoList";
import Table from "../table/Table";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Container>
            {/* <HelloWorld /> */}
            {/* <TodoList /> */}
            <Table />
        </Container>
    </StrictMode>
)