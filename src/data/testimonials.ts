export interface TestimonialItem {
  quote: string
  name: string
  title: string
  company: string
}

export const testimonials: TestimonialItem[] = [
  {
    quote:
      'Etiva gave our platform a clear, auditable data path while reducing deployment time by 40%.',
    name: 'Lena Ortiz',
    title: 'VP of Platform',
    company: 'Northwind Systems',
  },
  {
    quote:
      'We cut incident response from hours to minutes. The observability layer is unreal.',
    name: 'Marcus Lee',
    title: 'Director of Operations',
    company: 'Asterline Logistics',
  },
  {
    quote:
      'The API surface is clean and predictable. Our devs shipped new workflows in days.',
    name: 'Priya Desai',
    title: 'Head of Engineering',
    company: 'Helix Analytics',
  },
  {
    quote:
      'Security reviews went smoother than any previous vendor. Policies are built in, not bolted on.',
    name: 'Jordan Kim',
    title: 'Security Lead',
    company: 'Bluefield Health',
  },
]

