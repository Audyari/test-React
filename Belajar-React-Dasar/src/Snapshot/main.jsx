import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'  
import Counter from './Counter'
import CounterCopy from './Counter copy'

createRoot(document.getElementById('root')).render(
    <StrictMode>
       <Counter />
       <CounterCopy />
    </StrictMode>
)   