import { createRoot } from 'react-dom/client'
import CounterApp from './CounterApp'
import { StrictMode } from 'react'
import CounterApp1 from './CounterApp1'
import CounterApp2 from './CounterApp2'
import CounterApp3 from './CounterApp3'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <CounterApp />
      <hr />
      <CounterApp1 />
      <hr />
      <CounterApp2 />
      <hr />
      <CounterApp3 />
    </StrictMode>
)