import { createRoot } from 'react-dom/client'
import HelloWorld from './HelloWorld'
import HelloWorld2 from './HelloWorld2'
import { StrictMode } from 'react'
import Container from './Container'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Container>
            <HelloWorld />
            <HelloWorld2 />
        </Container>
    </StrictMode>
)