
import { useState } from 'react'

import StarfieldBackground from './components/layout/StarfieldBackground'
import StarMap from './components/constellation/StarMap'
import WindowShell from './components/windows/WindowShell'

import {
  stars,
  type StarId,
} from './data/constellation'

const creditLinkClass =
  'font-medium text-retro-cyan underline decoration-retro-cyan underline-offset-4 transition-colors hover:text-[#B99CF6] hover:decoration-[#B99CF6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-retro-cyan'

// @doc APP-STAR-STATE
function App() {
  const [selectedStarId, setSelectedStarId] =
    useState<StarId | null>(null)

  const selectedStar = stars.find(
    (star) => star.id === selectedStarId,
  )

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#080B1E] text-white">
      <StarfieldBackground />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="flex min-h-[35vh] flex-col justify-center px-6 py-10 sm:px-12 lg:min-h-screen">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#B99CF6]">
            MY DIGITAL UNIVERSE
          </p>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-[#F4F0FF] sm:text-6xl lg:text-7xl">
            Ian Diaz
          </h1>

          <p className="mt-1 text-sm font-semibold tracking-wide text-retro-cyan sm:text-base">
            Full-Stack Developer
          </p>

          <p className="mt-6 max-w-md text-sm leading-7 text-slate-200 sm:text-base">
            Explore my universe through its stars.
          </p>

          <p className="mt-5 text-xs tracking-widest text-[#B99CF6]">
            SELECT A STAR TO EXPLORE
          </p>
        </section>

        <section
          aria-label="Interactive portfolio constellation"
          className="relative min-h-[62vh] overflow-visible lg:min-h-screen"
        >
          <StarMap
            selectedStarId={selectedStarId}
            onSelectStar={setSelectedStarId}
          />
        </section>
      </div>

      {selectedStar && (
        <WindowShell
          open
          title={selectedStar.label}
          onClose={() => setSelectedStarId(null)}
        >
          {selectedStar.id === 'credits' ? (
            <div className="space-y-4">
              <p>
                This portfolio uses the following libraries,
                tools, and assets.
              </p>

              <ul className="list-disc space-y-3 pl-5">
                <li>
                  <a
                    className={creditLinkClass}
                    href="https://github.com/Joangeldelarosa/pxlkit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pxlkit UI Kit and Icon Builder
                  </a>
                </li>

                <li>
                  <a
                    className={creditLinkClass}
                    href="https://github.com/joshwcomeau/use-sound"
                    target="_blank"
                    rel="noreferrer"
                  >
                    use-sound
                  </a>
                </li>

                <li>
                  <a
                    className={creditLinkClass}
                    href="https://pixabay.com/sound-effects/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pixabay Sound Effects
                  </a>
                  {' — '}
                  <a
                    className={creditLinkClass}
                    href="https://pixabay.com/service/license-summary/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    License summary
                  </a>
                </li>

                <li>
                  <a
                    className={creditLinkClass}
                    href="https://space-spheremaps.itch.io/pixelart-starfields"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Space Spheremaps Pixelart Starfields
                  </a>
                </li>

                <li>
                  <a
                    className={creditLinkClass}
                    href="https://fontsource.org/fonts/pixelify-sans"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pixelify Sans via Fontsource
                  </a>
                </li>
              </ul>

              <p className="text-xs opacity-70">
                Individual asset creators and attribution
                requirements will be documented as the final
                assets are selected.
              </p>
            </div>
          ) : (
            <>
              <p className="leading-relaxed">
                {selectedStar.description}
              </p>

              <p className="mt-4 text-sm opacity-70">
                This section is a placeholder. We'll add the
                complete portfolio content in a later milestone.
              </p>
            </>
          )}
        </WindowShell>
      )}
    </main>
  )
}

export default App
