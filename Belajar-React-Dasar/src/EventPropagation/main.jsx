import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Toolbar from './Toolbar'
import SearchForm from './SearchForm'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Toolbar onClick={(e) => {
        e.stopPropagation();
        alert('Click')
      }}/>

      <SearchForm />

      
    </StrictMode>
)   