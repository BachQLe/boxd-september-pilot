import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import { FiveReasonsPage } from './FiveReasonsPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FiveReasonsPage />
  </StrictMode>,
)
