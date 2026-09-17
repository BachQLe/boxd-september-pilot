import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import { FindYourBoxPage } from './FindYourBoxPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FindYourBoxPage />
  </StrictMode>,
)
