import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import AlertButton from './AlertButton'
import AlertButton1 from './lertButton1'
import MyButton from './MyButton'

createRoot(document.getElementById('root')).render(
    <StrictMode>
       <AlertButton />
       <AlertButton1 text="TEST ALLERT BUTTON" message="INI MASSEGE ALLERT" />
       <MyButton text="TEST ONSMASH" onSmash={() => alert("YOU SMASH ME")} />
    </StrictMode>
)   