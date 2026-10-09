# Installation Guide

## Pixel Constellation Portfolio

This document contains the installation and initial configuration process for the Pixel Constellation Portfolio.

The goal is to establish a clean and reproducible React + TypeScript development environment before beginning application development.

> **Project root:** `C:\Project Portfolio\PortfolioRPG`

---

# 1. Technology Stack

| Technology                | Purpose                           |
| ------------------------- | --------------------------------- |
| React                     | UI framework                      |
| TypeScript                | Type safety                       |
| Vite                      | Development server and build tool |
| Tailwind CSS v4           | Utility-first styling             |
| Pxlkit                    | Pixel-art UI components           |
| SVG + CSS                 | Interactive constellation         |
| `use-sound`               | UI/audio feedback                 |
| Pixelify Sans             | Pixel-style typography            |
| Space background solution | Space/starfield visual layer      |

### Dependency Philosophy

We will keep the dependency list intentionally small.

We will **not install libraries simply because we might need them later**.

The first milestone is:

```text
One star
    ↓
Interaction
    ↓
Popup
```

Additional dependencies should only be introduced when there is an actual requirement for them.

---

# 2. Prerequisites

The project requires:

* Node.js
* npm
* Git
* VS Code or another code editor

The current development environment has already been verified:

```text
Node.js  v22.14.0
npm      10.9.2
Git      2.49.0.windows.1
```

These versions are suitable for starting the project.

There is currently **no need to update Node.js, npm, or Git** before installation.

---

# 3. Verify the Development Environment

Open Command Prompt or PowerShell.

## 3.1 Node.js

Run:

```bash
node --version
```

Expected:

```text
v22.14.0
```

The exact version does not need to match this number forever. The important requirement is that a supported modern Node.js version is installed.

---

## 3.2 npm

Run:

```bash
npm --version
```

Expected:

```text
10.9.2
```

---

## 3.3 Git

Run:

```bash
git --version
```

Expected:

```text
git version 2.49.0.windows.1
```

---

# 4. Project Location

The project will be located at:

```text
C:\Project Portfolio\PortfolioRPG
```

This directory is the **project root**.

We will create the Vite application directly inside this directory.

We do **not** want:

```text
C:\Project Portfolio\PortfolioRPG\pixel-constellation
```

The intended structure is:

```text
C:\Project Portfolio\PortfolioRPG\
├── public\
├── src\
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

---

# 5. Create the Vite Project

Open Command Prompt or PowerShell.

Navigate to the project directory:

```bash
cd /d "C:\Project Portfolio\PortfolioRPG"
```

Create the React + TypeScript Vite project directly in the current directory:

```bash
npm create vite@latest . -- --template react-ts
```

### Why is there a `.`?

The `.` means:

```text
Create the project in the current directory.
```

Therefore Vite will use:

```text
C:\Project Portfolio\PortfolioRPG
```

as the project root.

---

# 6. Install Initial Dependencies

After Vite finishes creating the project, run:

```bash
npm install
```

This installs the dependencies defined by the generated `package.json`.

---

# 7. Test the Fresh Vite Project

Before installing any additional libraries, verify that the base React application works.

Run:

```bash
npm run dev
```

Vite should display a local development URL similar to:

```text
http://localhost:5173/
```

Open that URL in your browser.

The default Vite + React page should appear.

If it works, the basic project installation is successful.

Stop the development server with:

```text
Ctrl + C
```

---

# 8. Install Tailwind CSS

This project uses **Tailwind CSS v4**.

Install:

```bash
npm install tailwindcss @tailwindcss/vite
```

### Important

Do **not** use the older Tailwind v3 initialization command:

```bash
npx tailwindcss init -p
```

Tailwind CSS v4 uses the Vite plugin approach.

---

# 9. Configure Tailwind

Open:

```text
vite.config.ts
```

Configure it as follows:

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

The important addition is:

```ts
import tailwindcss from '@tailwindcss/vite'
```

and:

```ts
tailwindcss()
```

---

# 10. Configure Global CSS

Open:

```text
src/index.css
```

For the initial Tailwind setup:

```css
@import "tailwindcss";
```

Tailwind CSS v4 does not require the old:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

directives.

---

# 11. Install Pxlkit

Install the Pxlkit UI library:

```bash
npm install @pxlkit/ui-kit
```

Pxlkit will eventually provide pixel-styled interface components.

Potential uses include:

* Buttons
* Cards
* Dialogs
* Inputs
* Notifications
* Other interface elements

### Important

We will verify the exact Pxlkit component API after installation before building our application around specific components.

We will **not assume component names or properties without verifying the installed package**.

---

# 12. Import Pxlkit Styles

Open:

```text
src/main.tsx
```

Add the Pxlkit stylesheet:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@pxlkit/ui-kit/styles.css'
import './index.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Keep:

```tsx
import '@pxlkit/ui-kit/styles.css'
```

before:

```tsx
import './index.css'
```

This allows our project-level CSS to override Pxlkit styles when necessary.

---

# 13. Install Pixelify Sans

Install the Pixelify Sans font package:

```bash
npm install @fontsource/pixelify-sans
```

Then update:

```text
src/main.tsx
```

Add:

```tsx
import '@fontsource/pixelify-sans'
```

For example:

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@fontsource/pixelify-sans'
import '@pxlkit/ui-kit/styles.css'
import './index.css'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

# 14. Configure the Global Font

Open:

```text
src/index.css
```

Use:

```css
@import "tailwindcss";

:root {
  font-family: "Pixelify Sans", sans-serif;
  color-scheme: dark;
}
```

Fontsource allows the font to be bundled with the project rather than relying on an external font request.

---

# 15. Install Sound Support

We will eventually use sound effects for interactions such as:

* Hovering over important stars
* Selecting a star
* Opening a project
* Closing a popup
* Confirming an interaction

Install:

```bash
npm install use-sound
```

Install the Howler TypeScript definitions:

```bash
npm install -D @types/howler
```

Do **not** add actual sound files yet.

Sound assets will be introduced after the interaction system is working.

---

# 16. Clean the Default Vite Application

The Vite template contains demonstration code that we do not need.

Replace:

```text
src/App.tsx
```

with:

```tsx
function App() {
  return (
    <main className="min-h-screen">
      <h1>Pixel Constellation</h1>
    </main>
  )
}

export default App
```

The default:

```text
src/App.css
```

can be removed once we confirm that nothing imports it.

---

# 17. Establish Initial Global CSS

Use:

```text
src/index.css
```

as the global styling foundation.

Initial version:

```css
@import "tailwindcss";

:root {
  font-family: "Pixelify Sans", sans-serif;
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

This is only the initial foundation.

The actual visual design will be developed later.

---

# 18. Test Tailwind

Temporarily change `App.tsx`:

```tsx
function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">
        Pixel Constellation
      </h1>
    </main>
  )
}

export default App
```

Run:

```bash
npm run dev
```

Verify:

* The page background is black.
* The text is white.
* The heading is centered.
* The heading is large.
* The Pixelify Sans font is visible.

If these work, Tailwind is correctly configured.

Stop the server:

```text
Ctrl + C
```

---

# 19. Verify Pxlkit

At this stage, verify that the Pxlkit package and stylesheet load correctly.

The exact component test should be based on the API exposed by the installed version of:

```text
@pxlkit/ui-kit
```

Do not copy component names from this document without first confirming that they exist in the installed package.

The important checks are:

* Pxlkit installs successfully.
* The stylesheet loads.
* There are no import errors.
* There are no browser console errors.
* Pxlkit styles do not break Tailwind.

Once verified, we can choose the specific Pxlkit components required by the portfolio.

---

# 20. Test TypeScript and Production Build

Run:

```bash
npm run build
```

The project should successfully compile.

This is an important checkpoint.

We should not begin the actual application implementation until:

```text
npm run build
```

completes successfully.

---

# 21. Initialize Git

From the project root:

```bash
cd /d "C:\Project Portfolio\PortfolioRPG"
```

Initialize Git:

```bash
git init
```

Check the repository:

```bash
git status
```

Stage the project:

```bash
git add .
```

Create the initial commit:

```bash
git commit -m "Initial project setup"
```

---

# 22. Verify `.gitignore`

The Vite project should already provide a `.gitignore`.

Verify that generated and private files are excluded.

It should contain entries similar to:

```gitignore
node_modules
dist
.env
.env.*
```

Do not commit:

* `node_modules`
* `dist`
* API keys
* passwords
* private environment variables
* credentials

---

# 23. Dependency Classification

The project dependencies can be thought of in two groups.

## Application Dependencies

These are used by the application itself:

```text
react
react-dom
@pxlkit/ui-kit
use-sound
@fontsource/pixelify-sans
```

## Development / Build Tooling

These support development and production builds:

```text
vite
@vitejs/plugin-react
typescript
tailwindcss
@tailwindcss/vite
@types/react
@types/react-dom
@types/howler
```

Exact package versions should normally be managed by npm unless a specific compatibility requirement exists.

---

# 24. Installation Verification Checklist

Before beginning application development, verify each item.

## Environment

* [ ] Node.js installed
* [ ] npm working
* [ ] Git working
* [ ] Code editor installed

## Project

* [ ] Vite project created
* [ ] React + TypeScript selected
* [ ] `npm install` completed
* [ ] `npm run dev` works

## Tailwind

* [ ] `tailwindcss` installed
* [ ] `@tailwindcss/vite` installed
* [ ] Vite plugin configured
* [ ] `@import "tailwindcss";` added
* [ ] Tailwind utility classes work

## Pxlkit

* [ ] `@pxlkit/ui-kit` installed
* [ ] Pxlkit stylesheet imported
* [ ] Pxlkit loads without errors
* [ ] Pxlkit API verified before use

## Typography

* [ ] `@fontsource/pixelify-sans` installed
* [ ] Pixelify Sans imported
* [ ] Pixelify Sans renders correctly

## Audio

* [ ] `use-sound` installed
* [ ] `@types/howler` installed

## Code quality

* [ ] `npm run build` succeeds
* [ ] Git initialized
* [ ] Initial commit created

---

# 25. Final Installation Test

From:

```text
C:\Project Portfolio\PortfolioRPG
```

run:

```bash
npm install
```

Then:

```bash
npm run build
```

Then:

```bash
npm run dev
```

If all three commands work, the base installation is complete.

---

# 26. What Comes After Installation?

After installation is confirmed, we will begin actual development.

The implementation order will be:

```text
1. Project shell
        ↓
2. Global visual/theme foundation
        ↓
3. Space background
        ↓
4. SVG constellation
        ↓
5. One interactive star
        ↓
6. Popup/window system
        ↓
7. Project/link data model
        ↓
8. Multiple constellation nodes
        ↓
9. Sound effects
        ↓
10. Responsive/mobile behavior
        ↓
11. Accessibility + keyboard interaction
        ↓
12. Performance optimization
        ↓
13. Production build/deployment
```

The most important rule is:

> **Build the smallest working version first.**

Do not add another dependency unless it solves an actual problem encountered during development.

---

# 27. First Development Milestone

The first real implementation milestone is:

```text
Full-screen space background
        +
SVG constellation
        +
One star
        +
Click interaction
        +
Popup
```

Once this works, the system can gradually expand into the complete interactive portfolio.
