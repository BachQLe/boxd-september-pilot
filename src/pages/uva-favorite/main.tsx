import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'
import { UvaFavoritePage } from './UvaFavoritePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UvaFavoritePage />
  </StrictMode>,
)
