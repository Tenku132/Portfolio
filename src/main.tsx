import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PxlKitSurfaceProvider } from '@pxlkit/ui-kit'

import '@fontsource-variable/pixelify-sans'
import './index.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PxlKitSurfaceProvider surface="pixel">
      <App />
    </PxlKitSurfaceProvider>
  </StrictMode>,
)