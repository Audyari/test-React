import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import { StrictMode } from "react";
import TodoList from "../todolist/TodoList";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Container>
            {/* <HelloWorld /> */}
            <TodoList />
        </Container>
    </StrictMode>
)