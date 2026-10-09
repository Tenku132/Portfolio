import { PixelButton } from '@pxlkit/ui-kit'

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black p-8 text-white">
      <h1 className="text-4xl font-bold">
        Pixel Starfield Portfolio
      </h1>

      <p className="text-center">
        React, Tailwind CSS, and Pxlkit are ready.
      </p>

      <PixelButton
        onClick={() => window.alert('Pxlkit is working!')}
      >
        Test Pxlkit
      </PixelButton>
    </main>
  )
}

export default App