
export type StarId =
  | 'about'
  | 'projects'
  | 'skills'
  | 'contact'
  | 'credits'

export interface StarDefinition {
  id: StarId
  label: string
  x: number
  y: number
  description: string
}

// @doc STAR-DATA
export const stars: StarDefinition[] = [
  {
    id: 'about',
    label: 'About',
    x: 22,
    y: 17,
    description:
      'Learn about the developer behind this portfolio, including my experience and learning journey.',
  },
  {
    id: 'projects',
    label: 'Projects',
    x: 49,
    y: 32,
    description:
      'Explore the projects, applications, and experiments I have worked on.',
  },
  {
    id: 'skills',
    label: 'Skills',
    x: 78,
    y: 25,
    description:
      'Explore the technologies, tools, and concepts I work with.',
  },
  {
    id: 'contact',
    label: 'Contact',
    x: 35,
    y: 56,
    description:
      'Find ways to contact me and connect with me.',
  },
  {
    id: 'credits',
    label: 'Credits',
    x: 59,
    y: 76,
    description:
      'Credits and links for the libraries, tools, and assets used in this portfolio.',
  },
]

// @doc SVG-CONNECTIONS
export const constellationConnections: Array<
  [StarId, StarId]
> = [
  ['about', 'projects'],
  ['projects', 'skills'],
  ['projects', 'contact'],
  ['skills', 'credits'],
  ['contact', 'credits'],
]
