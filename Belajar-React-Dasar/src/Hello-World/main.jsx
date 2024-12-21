import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Container from "./Container";
import { StrictMode } from "react";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Container>
            <HelloWorld />
        </Container>
    </StrictMode>
)