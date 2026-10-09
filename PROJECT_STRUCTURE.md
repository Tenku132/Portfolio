# Project Structure

## Pixel Constellation Portfolio

This document defines the architecture and organization of the Pixel Constellation Portfolio.

The purpose of this document is to explain **where code belongs and why**, rather than how to install the project.

The project uses React + TypeScript + Vite.

---

# 1. Project Philosophy

Unlike Laravel, React + Vite does not impose a large application architecture.

Vite provides the foundation for running and building the application, but the developer decides how the application's source code should be organized.

Therefore, our folder structure is intentionally designed around the needs of this project.

The main goals are:

* Keep components small and focused.
* Separate application data from UI.
* Keep reusable logic separate from components.
* Keep the constellation system isolated.
* Avoid unnecessary abstraction.
* Make the project easy to expand.
* Make the structure understandable to another developer.

---

# 2. Project Root

The project is located at:

```text
C:\Project Portfolio\PortfolioRPG
```

The root will contain Vite configuration, package configuration, source code, and public assets.

Approximate structure:

```text
PortfolioRPG/
├── public/
├── src/
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

---

# 3. `public/`

The `public` directory contains files that should be served directly without being processed by the application bundler.

Example:

```text
public/
├── favicon.ico
└── ...
```

Use this directory only when an asset needs to be referenced directly by a public URL.

For normal imported application assets, prefer:

```text
src/assets/
```

---

# 4. `src/`

The `src` directory contains the application's source code.

Our planned structure is:

```text
src/
├── assets/
├── components/
├── data/
├── hooks/
├── types/
├── App.tsx
├── index.css
└── main.tsx
```

Not every folder needs to exist immediately.

Directories should be created when the application actually requires them.

---

# 5. `src/assets/`

Contains assets that are imported by the application.

```text
src/assets/
├── images/
└── sounds/
```

---

## 5.1 `assets/images/`

Contains project-specific images.

Potential examples:

```text
images/
├── project-preview-1.png
├── project-preview-2.png
└── avatar.png
```

Images should be added only when they are actually required.

---

## 5.2 `assets/sounds/`

Contains sound effects used by the interface.

Potential structure:

```text
sounds/
├── star-hover.mp3
├── star-select.mp3
├── popup-open.mp3
├── popup-close.mp3
└── ui-confirm.mp3
```

We will keep the number of sound effects small.

The portfolio should provide subtle feedback rather than constant audio.

---

# 6. `src/components/`

Contains reusable React components.

Planned structure:

```text
components/
├── constellation/
├── layout/
└── ui/
```

---

# 7. `components/constellation/`

Contains everything directly related to the interactive constellation.

Potential components:

```text
constellation/
├── Constellation.tsx
├── ConstellationStar.tsx
├── ConstellationLine.tsx
└── ...
```

Responsibilities may include:

* Rendering SVG elements.
* Rendering stars.
* Rendering connecting lines.
* Handling star selection.
* Displaying interaction states.
* Positioning constellation nodes.

The constellation should remain isolated from unrelated UI.

---

# 8. `components/layout/`

Contains components responsible for the overall page structure.

Potential examples:

```text
layout/
├── PortfolioShell.tsx
├── Header.tsx
├── Navigation.tsx
└── ...
```

These components should handle the application's major visual regions rather than individual controls.

---

# 9. `components/ui/`

Contains reusable interface components that are not specific to the constellation.

Potential examples:

```text
ui/
├── Popup.tsx
├── Button.tsx
├── Panel.tsx
└── ...
```

Some of these may eventually be replaced or implemented using Pxlkit.

The important distinction is:

```text
constellation/
    Project-specific interactive visualization

ui/
    General reusable interface components
```

---

# 10. `src/data/`

Contains application data that should not be hardcoded directly into UI components.

Potential files:

```text
data/
├── projects.ts
├── socialLinks.ts
└── constellation.ts
```

For example, project information could eventually look conceptually like:

```ts
const projects = [
  {
    id: 'project-1',
    title: 'Project Name',
    description: 'Project description',
    technologies: ['React', 'Laravel'],
    url: '...',
  },
]
```

The actual data model will be defined once we begin implementing the project system.

---

# 11. `src/hooks/`

Contains reusable React hooks.

Potential examples:

```text
hooks/
├── useSoundEffect.ts
├── usePopup.ts
└── useConstellation.ts
```

Hooks should contain reusable behavior rather than visual markup.

For example:

```text
useSoundEffect
    ↓
Handles sound playback

usePopup
    ↓
Handles popup state

useConstellation
    ↓
Handles constellation interaction logic
```

We should not create hooks merely for the sake of creating hooks.

A hook should solve a real reuse or complexity problem.

---

# 12. `src/types/`

Contains shared TypeScript types.

Potential files:

```text
types/
├── Project.ts
├── Constellation.ts
└── ...
```

For example, a project type might eventually describe:

```text
Project
├── id
├── title
├── description
├── technologies
├── image
├── repository
└── liveUrl
```

The exact structure will be determined during implementation.

---

# 13. `App.tsx`

`App.tsx` is the primary application component.

Initially:

```text
App
 ↓
Portfolio shell
```

As the application grows, `App.tsx` should remain relatively small.

It should primarily compose the major application components rather than containing the entire portfolio implementation.

---

# 14. `main.tsx`

`main.tsx` is the React entry point.

Its responsibilities include:

* Starting the React application.
* Importing global styles.
* Importing global libraries/styles.
* Rendering `App`.

Conceptually:

```text
main.tsx
    ↓
React
    ↓
App
    ↓
Application components
```

---

# 15. `index.css`

`index.css` contains global styling.

It should contain things such as:

* Tailwind import.
* Global font configuration.
* Global box sizing.
* Base body styling.
* Global CSS variables.
* Global accessibility-related styles.

It should **not** become a giant file containing every component's styling.

Component-specific styling should stay close to the component where practical.

---

# 16. Application Architecture

The high-level architecture is:

```text
                    App
                     │
          ┌──────────┴──────────┐
          │                     │
      Layout                Application
          │                     │
          │             ┌───────┴────────┐
          │             │                │
          │       Constellation         UI
          │             │                │
          │             │             Popup
          │             │             Panel
          │             │             Button
          │             │
          │        Interactive
          │           Stars
          │
       Global
       Styling
```

---

# 17. Constellation Data Flow

The constellation should eventually be data-driven.

Conceptually:

```text
data/
  constellation.ts
       ↓
Constellation
       ↓
ConstellationStar
       ↓
User interaction
       ↓
Selected star
       ↓
Popup
       ↓
Project information
```

This prevents project information from being hardcoded inside individual star components.

---

# 18. Project Data Flow

Projects should eventually follow this pattern:

```text
projects.ts
     ↓
Project data
     ↓
Constellation star
     ↓
User selects star
     ↓
Selected project
     ↓
Project popup
```

This allows us to add projects without rewriting the constellation component.

---

# 19. UI State

Interactive state should remain in React state or dedicated hooks when appropriate.

Examples:

```text
selectedStar
selectedProject
isPopupOpen
isMuted
hoveredStar
```

The initial implementation should use simple React state.

We should only introduce a larger state-management library if the application actually becomes complex enough to require one.

---

# 20. Visual Layer Architecture

The portfolio will eventually use several visual layers.

Conceptually:

```text
┌─────────────────────────────────────┐
│           UI / Popups               │
├─────────────────────────────────────┤
│       Interactive Stars             │
├─────────────────────────────────────┤
│       SVG Constellation             │
├─────────────────────────────────────┤
│       Space Background              │
└─────────────────────────────────────┘
```

The layers should remain independent.

This allows us to:

* Change the background without changing the constellation.
* Change constellation positioning without changing popup UI.
* Disable expensive visual effects on mobile.
* Optimize individual layers independently.

---

# 21. SVG Constellation

The constellation will primarily use SVG.

Conceptually:

```tsx
<svg>
  <g className="constellation-lines">
    {/* Lines connecting stars */}
  </g>

  <g className="constellation-stars">
    {/* Interactive stars */}
  </g>
</svg>
```

SVG is appropriate because we need:

* Lines between nodes.
* Precise positioning.
* Scalable graphics.
* Clickable elements.
* Hover states.
* Animation possibilities.

We will avoid adding a graph visualization library unless SVG becomes insufficient.

---

# 22. Component Responsibility Rule

Each component should have a clear responsibility.

Bad:

```text
Constellation.tsx
    ↓
500 lines
    ↓
Rendering
Data
Audio
Popup
Navigation
Project logic
Animation
```

Better:

```text
Constellation
    ↓
ConstellationStar
    ↓
Project selection
    ↓
Popup
```

Keep components focused.

---

# 23. Data vs Components

Application data should not be mixed unnecessarily with UI.

Avoid:

```tsx
function Star() {
  const projectName = 'My Project'
  const description = '...'
  const technologies = [...]
}
```

Prefer:

```text
data/
    projects.ts
```

and:

```text
components/
    constellation/
```

The component receives the data it needs.

This makes adding or modifying projects much easier.

---

# 24. When to Create a New Folder

Do not create folders simply because they appear in this document.

For example, if we have no custom hooks yet, we do not need:

```text
src/hooks/
```

immediately.

Create a directory when it has a real purpose.

This keeps the project from becoming:

```text
20 folders
0 useful files
```

---

# 25. Planned Growth

The structure will likely grow toward something similar to:

```text
src/
├── assets/
│   ├── images/
│   └── sounds/
│
├── components/
│   ├── constellation/
│   │   ├── Constellation.tsx
│   │   ├── ConstellationStar.tsx
│   │   └── ConstellationLine.tsx
│   │
│   ├── layout/
│   │   ├── PortfolioShell.tsx
│   │   └── Navigation.tsx
│   │
│   └── ui/
│       ├── Popup.tsx
│       └── Panel.tsx
│
├── data/
│   ├── projects.ts
│   └── constellation.ts
│
├── hooks/
│   ├── usePopup.ts
│   └── useSoundEffect.ts
│
├── types/
│   ├── Project.ts
│   └── Constellation.ts
│
├── App.tsx
├── index.css
└── main.tsx
```

This is a **target architecture**, not a requirement to create every file immediately.

---

# 26. Architecture Rules

The project will follow these general rules:

### Rule 1 — Keep dependencies minimal

Do not install a library unless it solves an actual problem.

### Rule 2 — Keep components focused

A component should have a clear responsibility.

### Rule 3 — Separate data from presentation

Project and constellation information should be data-driven.

### Rule 4 — Prefer React state initially

Do not introduce global state management without a real need.

### Rule 5 — Prefer native browser capabilities

Use SVG, CSS, React, and browser APIs before adding another library.

### Rule 6 — Create folders when needed

The architecture should grow naturally with the application.

### Rule 7 — Keep visual layers independent

Background, constellation, and UI should be independently maintainable.

### Rule 8 — Type important application data

Shared structures should use TypeScript types.

---

# 27. Development Order

The architecture will be developed incrementally.

```text
Project shell
      ↓
Global styling
      ↓
Space background
      ↓
SVG constellation
      ↓
One star
      ↓
Star interaction
      ↓
Popup
      ↓
Project data
      ↓
Multiple stars
      ↓
Audio
      ↓
Responsive design
      ↓
Accessibility
      ↓
Performance
```

The structure should evolve alongside these milestones.

---

# 28. Important Principle

The folder structure is a tool, not the project itself.

We should avoid spending significant time designing an elaborate architecture before we have actual application code.

The goal is:

```text
Simple
   ↓
Working
   ↓
Understandable
   ↓
Reusable
   ↓
Scalable
```

rather than:

```text
Complex
   ↓
Abstract
   ↓
Over-engineered
   ↓
Difficult to understand
```

The architecture should grow because the application needs it.
