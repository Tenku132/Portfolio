# Pixel Starfield Portfolio — Tech Stack & Project Plan

> **Project directory:** `C:\Project Portfolio\PortfolioRPG`
>
> **Product name:** Pixel Starfield Portfolio
>
> **Application type:** Frontend-only React application
>
> **Project goal:** Build a personal portfolio as an interactive pixel-art star map. Each important star represents a portfolio section such as About, Projects, Skills, Experience, and Contact. Clicking a star opens a pixel-styled window containing that section.

---

# 1. Technical Direction

The first version should remain deliberately small.

The portfolio's main experience is a visual interaction system:

```text
Starfield
    ↓
Constellation
    ↓
Interactive Stars
    ↓
Pixel Window
    ↓
Portfolio Content
```

This can be built cleanly with React, TypeScript, SVG, CSS, Tailwind, application state, and a small number of focused dependencies.

We will not introduce libraries simply because they might become useful later.

The rule is:

> **Add a dependency only when a real requirement justifies it.**

---

# 2. Recommended Stack

| Layer                   | Technology                                | Purpose                                                     |
| ----------------------- | ----------------------------------------- | ----------------------------------------------------------- |
| Language                | **TypeScript**                            | Type-safe application development                           |
| UI framework            | **React**                                 | Component-based UI and interaction                          |
| Build tool              | **Vite**                                  | Development server and production bundling                  |
| Styling                 | **Tailwind CSS v4**                       | Layout, responsive design, utility styling                  |
| Pixel UI                | **Pxlkit `@pxlkit/ui-kit`**               | Pixel-art UI components                                     |
| Constellation rendering | **Native SVG**                            | Lines, nodes, positioning, and interaction                  |
| Animation               | **CSS animations/transitions**            | Twinkling, fading, scaling, and simple motion               |
| State                   | **React state**                           | Selected star, active window, UI settings                   |
| Sound playback          | **use-sound**                             | React-friendly UI sound effects                             |
| Audio engine            | **Howler.js**                             | Audio engine used internally by `use-sound`                 |
| Typography              | **Pixelify Sans Variable via Fontsource** | Pixel-style typography                                      |
| Star background         | **Space Spheremaps Pixelart Starfields**  | Pixel-art space background                                  |
| Static assets           | **Vite `public/assets`**                  | Predictable URLs for backgrounds, audio, and project images |
| Deployment              | **Static hosting**                        | Vercel, Netlify, GitHub Pages, Cloudflare Pages, or similar |

---

# 3. Why React + Vite Instead of Laravel?

For this project, the portfolio should start as a standalone frontend application.

The current requirements are primarily:

```text
Frontend
├── visual presentation
├── star map interaction
├── popup windows
├── project links
├── animations
└── sound
```

There is currently no requirement for:

```text
database
authentication
server-side rendering
backend API
server-side business logic
```

Therefore, Laravel would introduce infrastructure that the portfolio does not currently need.

The recommended architecture is:

```text
Browser
   │
   ▼
React + TypeScript
   │
   ├── Pxlkit
   ├── Tailwind CSS
   ├── SVG constellation
   ├── CSS animations
   ├── React state
   └── use-sound
   │
   ▼
Static production build
```

The user's Laravel experience is still useful here. This project provides an opportunity to practice a clean, frontend-only React architecture.

If the project later requires a CMS, contact form backend, analytics API, authentication, or another server-side feature, a backend can be introduced at that point.

---

# 4. Core Dependencies

## 4.1 React

React is the application's primary UI framework.

Responsibilities include:

* Component rendering
* Interaction handling
* State management
* Conditional UI
* Composing the star map and portfolio windows

React should remain the foundation rather than introducing another UI framework.

---

# 5. TypeScript

TypeScript is used throughout the project.

It is especially important for:

* Star definitions
* Project data
* Component props
* Window definitions
* UI state
* Shared application structures

For example:

```ts
interface StarDefinition {
  id: string
  label: string
  x: number
  y: number
}
```

The project should avoid unnecessary `any` usage.

When a structure represents real application data, it should normally have an explicit type.

---

# 6. Vite

Vite is responsible for:

* Local development
* Hot module replacement
* TypeScript/React integration
* Production bundling
* Development server
* Static asset handling

The project is intentionally using Vite rather than a full-stack framework because the first version is a static frontend application.

---

# 7. Tailwind CSS v4

Tailwind CSS v4 is the primary utility styling system.

Use Tailwind for:

* Layout
* Spacing
* Responsive behavior
* Positioning
* Typography utilities
* Colors
* Borders
* Flexbox/grid
* Simple transitions

Install:

```bash
npm install -D tailwindcss @tailwindcss/vite
```

The Vite plugin is configured in:

```text
vite.config.ts
```

Example:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

---

# 8. Pxlkit

Package:

```text
@pxlkit/ui-kit
```

Installation:

```bash
npm install @pxlkit/ui-kit
```

Pxlkit is the main reusable pixel-art UI system.

Its current React package provides a large collection of pixel-styled components including buttons, inputs, cards, modals, toasts, layout primitives, and other interface components. The current package also supports React 18.2+ and React 19.

Potential uses include:

* Pixel buttons
* Cards
* Dialogs/windows
* Inputs
* Toasts
* Tooltips
* Tabs
* Other reusable interface primitives

### Pxlkit's role

Pxlkit should provide the reusable **UI language**.

Our application should provide the unique **portfolio experience**.

We should not attempt to force the entire star-map system into Pxlkit.

---

# 9. Pxlkit + Tailwind CSS v4 Integration

Pxlkit's current stylesheet is a Tailwind CSS v4 entry point.

That means the project still needs Tailwind's Vite plugin, but the Pxlkit stylesheet should act as the main global stylesheet entry rather than separately importing:

```css
@import "tailwindcss";
```

Recommended `src/index.css`:

```css
@import "@pxlkit/ui-kit/styles.css";

:root {
  font-family: "Pixelify Sans Variable", sans-serif;
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html,
body,
#root {
  min-height: 100%;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background: #02040a;
}
```

Pxlkit's documentation specifically describes its stylesheet as importing Tailwind and providing the Pxlkit theme/classes, so it replaces the standalone `@import "tailwindcss"` entry in the global stylesheet.

---

# 10. Pxlkit Licensing

The `@pxlkit/ui-kit` code package is MIT licensed.

Pxlkit also has separately licensed icon packs and visual assets.

For this project:

* The UI-kit package can be used as a dependency.
* Separately downloaded Pxlkit visual assets should be tracked independently.
* Any asset that has attribution requirements should be documented in the project's asset records.

Do not assume that the license of the UI-kit code automatically applies to every other asset in the Pxlkit ecosystem.

---

# 11. Sound — `use-sound`

Install:

```bash
npm install use-sound
```

`use-sound` provides a React hook for playing sound effects and uses Howler.js as its underlying audio utility. Its documentation recommends `@types/howler` for TypeScript projects.

Install the TypeScript definitions:

```bash
npm install -D @types/howler
```

We do not need to install a second audio library merely to use normal `use-sound` functionality.

Potential uses:

```text
star hover
star click
window open
window close
button click
optional confirmation/error feedback
```

Example concept:

```tsx
const [play] = useSound('/assets/audio/star-click.mp3')

<button type="button" onClick={play}>
  Open
</button>
```

---

# 12. Sound Design Philosophy

Sound should enhance the interface without becoming annoying.

The initial sound set should be small:

```text
star-hover.mp3
star-click.mp3
window-open.mp3
window-close.mp3
```

We may add additional sounds later if they provide useful feedback.

Avoid:

```text
constant music
frequent repetitive beeps
sound on every minor animation
long intrusive effects
```

The portfolio must remain usable with sound disabled.

---

# 13. Pixelify Sans

Package:

```text
@fontsource-variable/pixelify-sans
```

Install:

```bash
npm install @fontsource-variable/pixelify-sans
```

Import:

```tsx
import '@fontsource-variable/pixelify-sans'
```

Use:

```css
:root {
  font-family: "Pixelify Sans Variable", sans-serif;
}
```

The current Fontsource package provides the Pixelify Sans variable font with a weight axis covering 400–700 and uses the `Pixelify Sans Variable` family name. The font is distributed under the SIL Open Font License 1.1.

Pixelify Sans should primarily be used for:

* Headings
* Labels
* Navigation
* Star names
* Pixel UI text

We will test the actual interface before deciding whether long-form body text needs a secondary, more conventional font.

---

# 14. Starfield Background

The currently planned background asset is:

```text
Space Spheremaps — Pixelart Starfields
```

The asset pack contains three seamless, tileable pixel-art starfields at 320×320 pixels and is described by the creator as free for commercial, prototyping, and personal projects.

This is the **planned** background source, not a dependency that needs to be installed with npm.

Store downloaded assets under:

```text
public/
└── assets/
    └── backgrounds/
```

For example:

```text
public/assets/backgrounds/stars-1.png
public/assets/backgrounds/stars-2.png
public/assets/backgrounds/stars-3.png
```

---

# 15. Background Strategy

The starfield should be implemented as a visual layer behind the constellation.

Concept:

```text
┌─────────────────────────────┐
│        UI / Popups          │
├─────────────────────────────┤
│     Interactive Stars       │
├─────────────────────────────┤
│     SVG Constellation       │
├─────────────────────────────┤
│    Starfield Background     │
└─────────────────────────────┘
```

The background should be:

* visually rich
* lightweight
* subtle
* independent from constellation data

Avoid making the background the main visual focus.

---

# 16. Static Asset Strategy

Use:

```text
public/assets/
```

for external/static assets whose URLs should remain predictable.

Recommended structure:

```text
public/
└── assets/
    ├── backgrounds/
    │   ├── stars-1.png
    │   ├── stars-2.png
    │   └── stars-3.png
    │
    ├── audio/
    │   ├── star-hover.mp3
    │   ├── star-click.mp3
    │   ├── window-open.mp3
    │   └── window-close.mp3
    │
    ├── projects/
    │   ├── direction-map.png
    │   └── ...
    │
    └── stars/
        └── ...
```

This produces predictable URLs such as:

```text
/assets/backgrounds/stars-1.png
/assets/audio/star-click.mp3
/assets/projects/direction-map.png
```

Normal source code should remain under:

```text
src/
```

The `public/assets` directory is for static assets rather than application logic.

---

# 17. Constellation Rendering

The constellation will use:

```text
React
+
Native SVG
+
CSS
+
React state
```

No constellation/graph visualization library is initially required.

The basic architecture is:

```text
StarMap
│
├── ConstellationLines
│      └── SVG lines/paths
│
├── Star[]
│      └── interactive buttons
│
└── ActiveWindow
       └── selected portfolio section
```

SVG is appropriate because the project needs:

* Precise node positioning
* Connecting lines
* Scalable graphics
* Hover/focus states
* Clickable elements
* Simple animation
* Resolution independence

---

# 18. Star Data Model

Star definitions should be data-driven.

Recommended location:

```text
src/data/constellation.ts
```

Example:

```ts
export interface StarDefinition {
  id: string
  label: string
  x: number
  y: number
  section: string
}

export const stars: StarDefinition[] = [
  {
    id: 'about',
    label: 'About',
    x: 30,
    y: 35,
    section: 'about',
  },
  {
    id: 'projects',
    label: 'Projects',
    x: 55,
    y: 50,
    section: 'projects',
  },
  {
    id: 'skills',
    label: 'Skills',
    x: 74,
    y: 31,
    section: 'skills',
  },
  {
    id: 'contact',
    label: 'Contact',
    x: 64,
    y: 74,
    section: 'contact',
  },
]
```

The exact model can evolve during implementation.

The important rule is:

> Coordinates and metadata belong to data, not hardcoded JSX.

---

# 19. Constellation Lines

Use an SVG layer behind the interactive stars.

Concept:

```tsx
<svg
  className="pointer-events-none absolute inset-0 h-full w-full"
>
  <line
    x1="30%"
    y1="35%"
    x2="55%"
    y2="50%"
  />

  <line
    x1="55%"
    y1="50%"
    x2="74%"
    y2="31%"
  />
</svg>
```

The SVG line layer should not prevent star interaction.

Therefore:

```text
pointer-events-none
```

is appropriate for the decorative line layer.

---

# 20. Stars Should Be Real Buttons

An interactive star should normally be implemented as:

```tsx
<button
  type="button"
  aria-label="Open Projects"
  onClick={() => openStar('projects')}
>
  ...
</button>
```

rather than:

```tsx
<div onClick={...}>
```

This provides:

* Keyboard interaction
* Focus behavior
* Semantic meaning
* Better accessibility
* Easier hover/focus states
* Better interaction consistency

The button can still be styled to look completely custom.

---

# 21. Star Interaction State

Initially, React state is enough.

Example:

```tsx
const [activeStar, setActiveStar] = useState<string | null>(null)
```

Opening a star:

```tsx
setActiveStar('projects')
```

Closing the active window:

```tsx
setActiveStar(null)
```

A larger state-management library is unnecessary unless the application's state becomes genuinely difficult to manage.

---

# 22. Separate Navigation From Portfolio Content

The star map should not contain the complete content for About, Projects, Skills, Experience, and Contact.

Use separate window components.

Recommended architecture:

```text
src/
├── components/
│   ├── constellation/
│   │   ├── StarMap.tsx
│   │   ├── Star.tsx
│   │   └── ConstellationLines.tsx
│   │
│   └── windows/
│       ├── WindowShell.tsx
│       ├── AboutWindow.tsx
│       ├── ProjectsWindow.tsx
│       ├── SkillsWindow.tsx
│       ├── ExperienceWindow.tsx
│       └── ContactWindow.tsx
│
└── data/
    └── constellation.ts
```

The separation is:

```text
StarMap
=
navigation + interaction

Window components
=
portfolio content
```

---

# 23. Project Data

Portfolio projects should also be data-driven.

Recommended location:

```text
src/data/projects.ts
```

Potential structure:

```ts
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image?: string
  repository?: string
  liveUrl?: string
}
```

The project information should not be duplicated across multiple UI components.

This makes adding or editing projects much easier.

---

# 24. Application Architecture

At the top level:

```text
App
│
├── Background
│
├── StarMap
│   ├── ConstellationLines
│   └── Star[]
│
├── WindowLayer
│   └── ActiveWindow
│
└── GlobalControls
    └── Sound toggle
```

Conceptually:

```text
┌──────────────────────────────────────────────┐
│                BACKGROUND                    │
│                                              │
│       ✦                         ✦            │
│          \                    /              │
│           ✦──────✦──────────✦               │
│                  │                           │
│                  ✦                           │
│                                              │
│                              Sound: ON       │
└──────────────────────────────────────────────┘
                       │
                       ▼
                  Window layer
```

The window layer should sit above the constellation.

---

# 25. Animation Philosophy

The portfolio should feel alive without becoming visually noisy.

Use three categories of animation.

## Ambient Animation

Background effects and subtle star activity.

Examples:

```text
star opacity
subtle twinkle
very slow background movement
very small visual drift
```

## Interaction Animation

Animations caused directly by the user.

Examples:

```text
hover
focus
click
window opening
window closing
button press
```

## Attention Animation

Rare visual emphasis.

Examples:

```text
newly discovered star pulses
selected star glows
new section briefly highlights
```

Avoid constantly bouncing or flashing every element.

---

# 26. CSS First for Animation

Use CSS animations and transitions for:

* Opacity changes
* Fades
* Twinkles
* Scale transitions
* Simple transforms
* Hover effects
* Basic window transitions

Example:

```css
@keyframes twinkle {
  0%,
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }
}
```

Do not install Motion/Framer Motion or GSAP initially.

If the project later requires:

* Complex timelines
* Spring physics
* Advanced page transitions
* Draggable interfaces
* Complex coordinated animation

then the appropriate animation library can be evaluated.

---

# 27. Responsive Design

The constellation must support:

```text
desktop
laptop
tablet
mobile
```

The desktop and mobile layouts do not necessarily need identical node placement.

The architecture should allow:

```text
Desktop constellation
    ↓
larger composition

Mobile constellation
    ↓
more compact composition
```

Possible future options include:

* Responsive coordinate scaling
* Alternative mobile coordinates
* Reduced node count
* Reduced visual effects

Do not hardcode the entire constellation around one screen resolution.

---

# 28. Accessibility

The portfolio is highly visual, so accessibility must be designed intentionally.

Every interactive star should have a meaningful accessible name:

```tsx
aria-label="Open Projects"
```

Keyboard interaction should work:

```text
Tab
 ↓
Focus star
 ↓
Enter / Space
 ↓
Open window
```

Windows should have:

* Visible close controls
* Keyboard-accessible closing
* Readable text
* Sufficient contrast
* Sensible focus handling

Sound must never be required to understand the interface.

---

# 29. Sound Toggle

A global sound setting should eventually exist:

```ts
const [soundEnabled, setSoundEnabled] = useState(true)
```

Sound effects should respect this setting.

Conceptually:

```tsx
const [play] = useSound('/assets/audio/star-click.mp3', {
  soundEnabled,
})
```

The user should be able to switch:

```text
SFX: ON
```

to:

```text
SFX: OFF
```

The application should also account for browser restrictions on automatic audio playback.

---

# 30. Performance Strategy

The portfolio should prioritize lightweight browser-native rendering.

Prefer:

```text
PNG textures
CSS
SVG
opacity
transforms
normal DOM
React state
```

Avoid introducing:

```text
WebGL
Three.js
video backgrounds
large animated GIFs
thousands of DOM nodes
```

unless a real design requirement appears.

The core constellation may only require approximately 5–20 meaningful interactive stars, which is trivial for a modern browser.

---

# 31. What We Are Intentionally Not Adding

The following are deliberately deferred.

## React Router

Not initially required because the portfolio is intended to behave as a single interactive page.

Add it only if the project later requires genuinely separate routes/pages.

---

## Redux / Zustand

Not initially required.

React state should be sufficient for:

```text
selectedStar
activeWindow
soundEnabled
hoveredStar
```

Add a state-management library only when application state becomes genuinely difficult to manage.

---

## Motion / Framer Motion

Not initially required.

CSS should handle simple animation.

Evaluate Motion only when more advanced animation behavior is actually required.

---

## GSAP

Not initially required.

Consider it only for complex timeline-based animation.

---

## Three.js / React Three Fiber

Not initially required.

The portfolio is intentionally 2D pixel art.

These should only be considered if the design becomes a true 3D space environment.

---

## Constellation / Graph Libraries

Not initially required.

Native SVG gives us sufficient control.

---

## Canvas Rendering

Not initially required.

SVG and DOM are preferable for the relatively small number of interactive nodes.

---

## Additional Icon Libraries

Not initially required.

Use Pxlkit where an appropriate pixel-art icon/component already exists.

Do not introduce a second icon system without a specific need.

---

# 32. Dependency Philosophy

The dependency tree should remain small.

Before adding a library, ask:

```text
1. What problem are we solving?
2. Can React solve it?
3. Can CSS solve it?
4. Can SVG solve it?
5. Can a small utility function solve it?
6. Is the dependency worth the additional complexity?
```

Only introduce the dependency if the answer justifies it.

---

# 33. Initial Dependency Set

After creating the Vite project, the additional packages should be approximately:

## Application dependencies

```text
@pxlkit/ui-kit
@fontsource-variable/pixelify-sans
use-sound
```

React and React DOM are supplied by the Vite React template.

## Development dependencies

```text
@tailwindcss/vite
@types/howler
tailwindcss
```

Vite, TypeScript, React type definitions, and the React Vite plugin are supplied by the project template.

Do not manually replace dependency versions with arbitrary values.

Run the appropriate npm commands and allow:

```text
package.json
+
package-lock.json
```

to record the resolved versions.

---

# 34. Initial Install Commands

The project is located at:

```text
C:\Project Portfolio\PortfolioRPG
```

Create the Vite project directly in that directory:

```bash
cd /d "C:\Project Portfolio\PortfolioRPG"

npm create vite@latest . -- --template react-ts

npm install
```

Install application dependencies:

```bash
npm install @pxlkit/ui-kit use-sound @fontsource-variable/pixelify-sans
```

Install development dependencies:

```bash
npm install -D tailwindcss @tailwindcss/vite @types/howler
```

Start development:

```bash
npm run dev
```

---

# 35. Project Structure

The technical architecture should align with:

```text
PortfolioRPG/
│
├── public/
│   └── assets/
│       ├── backgrounds/
│       ├── audio/
│       ├── projects/
│       └── stars/
│
├── src/
│   ├── components/
│   │   ├── constellation/
│   │   │   ├── StarMap.tsx
│   │   │   ├── Star.tsx
│   │   │   └── ConstellationLines.tsx
│   │   │
│   │   └── windows/
│   │       ├── WindowShell.tsx
│   │       ├── AboutWindow.tsx
│   │       ├── ProjectsWindow.tsx
│   │       ├── SkillsWindow.tsx
│   │       ├── ExperienceWindow.tsx
│   │       └── ContactWindow.tsx
│   │
│   ├── data/
│   │   ├── constellation.ts
│   │   └── projects.ts
│   │
│   ├── hooks/
│   │   └── useSoundEffects.ts
│   │
│   ├── types/
│   │   └── ...
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

This is the target architecture.

Do not create every directory immediately.

Create directories when actual implementation requires them.

---

# 36. Development Milestones

## Milestone 1 — Project Foundation

Install and verify:

```text
Vite
React
TypeScript
Tailwind CSS
Pxlkit
Pixelify Sans
use-sound
```

Success condition:

```text
The application starts.
Tailwind works.
Pxlkit renders.
Pixelify Sans renders.
Production build succeeds.
```

---

## Milestone 2 — Starfield

Add:

```text
Space Spheremaps background
```

Success condition:

```text
Full viewport
+
seamless pixel-art starfield
```

---

## Milestone 3 — First Interactive Star

Build:

```text
one star
+
one click handler
+
one popup
```

Success condition:

```text
Click star
    ↓
window appears

Click close
    ↓
window disappears
```

---

## Milestone 4 — Constellation

Add:

```text
5–8 stars
+
SVG connecting lines
+
data-driven coordinates
```

Success condition:

```text
Constellation looks intentional.
Every star opens the correct section.
```

---

## Milestone 5 — Portfolio Content

Implement:

```text
About
Projects
Skills
Experience
Contact
```

---

## Milestone 6 — Audio

Add:

```text
star hover
star click
window open
window close
```

and implement the sound toggle.

---

## Milestone 7 — Visual Polish

Add:

```text
twinkle
glow
subtle background movement
window transitions
hover states
focus states
```

---

## Milestone 8 — Responsive Design

Test at:

```text
1920 × 1080
1440 × 900
1366 × 768
1024 × 768
768 × 1024
390 × 844
```

---

## Milestone 9 — Accessibility

Verify:

```text
keyboard navigation
focus visibility
screen-reader labels
contrast
sound independence
window close behavior
```

---

## Milestone 10 — Performance

Check:

```text
bundle size
image sizes
audio sizes
animation cost
layout shifts
mobile performance
```

---

## Milestone 11 — Deployment

Create the production build:

```bash
npm run build
```

Then deploy the generated static build to an appropriate hosting service.

---

# 37. First Development Target

Do not attempt the finished portfolio immediately.

The first usable prototype should be:

```text
                    ✦
                   /
          ✦──────✦──────✦
                         \
                          ✦
```

Click the center star:

```text
┌─────────────────────────────┐
│ ✦ ABOUT                 [X] │
├─────────────────────────────┤
│                             │
│ Hello! I'm ...              │
│                             │
│ Full-stack developer        │
│                             │
└─────────────────────────────┘
```

Once that works, the core architecture has been proven.

Everything else can then be expanded incrementally.

---

# 38. Architecture Rules

### Rule 1 — Keep dependencies minimal

Do not install a library without a concrete requirement.

### Rule 2 — Keep components focused

A component should have a clear responsibility.

### Rule 3 — Separate data from presentation

Project and constellation data should live outside visual components.

### Rule 4 — Prefer React state initially

Do not introduce global state management prematurely.

### Rule 5 — Prefer browser-native capabilities

Use:

```text
CSS
SVG
DOM
React
```

before adding another library.

### Rule 6 — Keep visual layers independent

Background, constellation, and window UI should be independently maintainable.

### Rule 7 — Make important interaction accessible

Stars must remain keyboard-accessible regardless of their visual presentation.

### Rule 8 — Treat sound as optional

The portfolio must remain fully understandable and usable with sound disabled.

### Rule 9 — Create architecture as needed

Do not create empty folders or abstractions simply because they might become useful.

### Rule 10 — Prefer small, reversible decisions

Build the smallest working solution first and expand only when the actual requirements justify it.

---

# 39. Asset Licensing Record

External assets should be tracked.

At minimum, record:

```text
Asset
Creator
Source
License
Attribution requirement
Date acquired
```

This applies to:

* Background textures
* Sound effects
* Icons
* Illustrations
* Fonts
* Other downloaded assets

A dedicated `ASSETS.md` file can be introduced once the project contains enough external assets to justify it.

---

# 40. Definition of a Successful v1

The finished first version should feel like an interactive pixel-art portfolio rather than a traditional website with pixel decoration.

The visitor should be able to:

1. Load the site and immediately see a starfield.
2. Understand that the stars are interactive.
3. Hover or focus a star and receive feedback.
4. Click a star.
5. Hear an optional UI sound.
6. See a pixel-styled window appear.
7. Read the relevant portfolio content.
8. Close the window.
9. Navigate to another star.
10. Disable sound.
11. Use important interactions with a keyboard.
12. Use the site on a phone.

The underlying technology should remain mostly invisible to the visitor.

---

# 41. Current Architecture Summary

```text
                         PORTFOLIO
                             │
                ┌────────────┴────────────┐
                │                         │
            VISUALS                    LOGIC
                │                         │
        ┌───────┼────────┐        ┌───────┼────────┐
        │       │        │        │       │        │
    Starfield  Pxlkit   Font    React   SVG     State
        │                │        │       │        │
        └────────────────┴────────┴───────┴────────┘
                             │
                             ▼
                     Interactive Star Map
                             │
                       click / hover
                             │
                             ▼
                       Pixel Window
                             │
                  ┌──────────┼──────────┐
                  │          │          │
                About     Projects    Contact
                             │
                           SFX
                             │
                         use-sound
```

---

# 42. Technical Decision Summary

| Decision             | Choice                 | Reason                                         |
| -------------------- | ---------------------- | ---------------------------------------------- |
| Frontend             | React                  | Component-based interaction                    |
| Language             | TypeScript             | Safer, maintainable application code           |
| Build                | Vite                   | Lightweight frontend build system              |
| Styling              | Tailwind CSS v4        | Fast responsive utility styling                |
| Pixel UI             | Pxlkit                 | Consistent pixel-art interface                 |
| Star map             | Native SVG             | Full control without graph-library overhead    |
| Animation            | CSS first              | Lightweight and sufficient for initial effects |
| Audio                | use-sound              | Simple React audio interaction                 |
| Font                 | Pixelify Sans Variable | Pixel-art visual identity                      |
| Background           | Space Spheremaps       | Lightweight tileable pixel-art starfield       |
| State                | React state            | Sufficient for initial application complexity  |
| Assets               | `public/assets`        | Predictable static URLs                        |
| Routing              | None initially         | Single interactive page                        |
| Global state library | None initially         | Avoid unnecessary complexity                   |
| 3D engine            | None                   | Project is intentionally 2D                    |
| Graph library        | None                   | Native SVG is sufficient                       |
| Backend              | None initially         | No current backend requirement                 |
| Deployment           | Static hosting         | Matches frontend-only architecture             |

---

# 43. Final Principle

The technology should serve the experience.

The portfolio is not intended to demonstrate how many libraries can be used.

It is intended to demonstrate:

```text
Frontend fundamentals
        +
Visual design
        +
React architecture
        +
TypeScript
        +
Interaction design
        +
Accessibility
        +
Performance
```

The simplest implementation that produces the intended experience should be preferred.

> **Build the smallest working version first. Then expand it deliberately.**
