import { createRoot } from 'react-dom/client'
import HelloWorldd from './HelloWorldd'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HelloWorldd />
        <HelloWorldd />
    </StrictMode>
)