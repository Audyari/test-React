import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import ContactForm from './ContactForm'
import ContactFormCopy from './ContactForm copy'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ContactForm />
        <ContactFormCopy />
    </StrictMode>
)