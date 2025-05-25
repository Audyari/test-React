import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import TodoList from './TodoList'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TodoList />
    </StrictMode>
)   