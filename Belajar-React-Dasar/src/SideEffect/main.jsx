import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import SayHelloForm from './SayHelloForm'

createRoot(document.getElementById('root')).render(
    <StrictMode>
       <SayHelloForm />
    </StrictMode>
)