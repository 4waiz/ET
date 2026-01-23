import { ButtonLink } from '../components/Button'
import { Section } from '../components/Section'

export default function NotFound() {
  return (
    <Section className="container flex flex-col items-start gap-6">
      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">404</p>
      <h1 className="text-4xl font-semibold text-white">This page does not exist.</h1>
      <p className="max-w-lg text-slate-300">
        The route you requested is not available. Head back to the main experience to keep exploring.
      </p>
      <ButtonLink to="/">Return home</ButtonLink>
    </Section>
  )
}

