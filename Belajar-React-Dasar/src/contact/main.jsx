import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactForm from "../contact/ContactForm"
import ContactFormDOM from './ContactFormDOM'
import ContactFormImmer from './ContactFormImmer'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ContactForm />
        <ContactFormDOM />
        <ContactFormImmer />
    </StrictMode>,
)
