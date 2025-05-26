import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import AlertButton from './AlertButton'

createRoot(document.getElementById('root')).render(
    <StrictMode>
       <AlertButton text="TEST ALLERT BUTTON" message="INI MASSEGE ALLERT" />
    </StrictMode>
)   