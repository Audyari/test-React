import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import CounterSalah from './CounterSalah'
import CounterBenar from './CounterBenar'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CounterSalah />
        <CounterBenar />
        <CounterBenar />
    </StrictMode>
)