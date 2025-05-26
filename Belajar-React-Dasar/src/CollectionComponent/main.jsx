import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import TodoList from './TodoList'
import TodoListCopy from './TodoList copy'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TodoList />
        <TodoListCopy />
    </StrictMode>
)   