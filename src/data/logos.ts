export interface LogoItem {
  name: string
  review: string
  author: string
  role: string
}

export const logos: LogoItem[] = [
  {
    name: 'PulseBank',
    review: 'Etiva reduced our incident response time by 70%. Game changer for our ops team.',
    author: 'Sarah Chen',
    role: 'VP Engineering',
  },
  {
    name: 'VantaGrid',
    review: 'The automation workflows saved us 200+ engineering hours per month.',
    author: 'Marcus Reid',
    role: 'CTO',
  },
  {
    name: 'Archetype',
    review: 'Finally, a platform that understands enterprise compliance needs.',
    author: 'Elena Torres',
    role: 'Head of Security',
  },
  {
    name: 'NovaSphere',
    review: 'We scaled from 10 to 100 workflows without adding headcount.',
    author: 'James Park',
    role: 'Director of Ops',
  },
  {
    name: 'Kairo Systems',
    review: 'The governance features alone justified our entire investment.',
    author: 'Priya Sharma',
    role: 'Chief Compliance Officer',
  },
  {
    name: 'Lyra Health',
    review: 'Etiva made our HIPAA compliance automation seamless and auditable.',
    author: 'David Kim',
    role: 'VP of Technology',
  },
]

