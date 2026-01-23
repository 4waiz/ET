import { useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { Badge } from '../components/Badge'
import { Button, ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { DeviceMockup } from '../components/DeviceMockup'
import { FeatureGrid } from '../components/FeatureGrid'
import { LogoCloud } from '../components/LogoCloud'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { Section } from '../components/Section'
import { Tabs } from '../components/Tabs'
import { ApiSnippet } from '../components/ApiSnippet'
import { Metric } from '../components/Metric'
import { Testimonial } from '../components/Testimonial'
import { features } from '../data/features'
import { logos } from '../data/logos'
import { testimonials } from '../data/testimonials'

// Stock images from Unsplash
const stockImages = {
  teamCollab: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  dashboard: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  serverRoom: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  coding: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
  analytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  meeting: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
}

const heroLines = ['Autonomous control', 'for modern SaaS', 'teams at scale']

export default function Home() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const deviceY = useTransform(scrollYProgress, [0, 0.25], [0, reduceMotion ? 0 : -40])

  const headlineContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  }

  const wordVariant = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: { opacity: 1, y: 0 },
  }

  const demoTabs = [
    {
      id: 'workflows',
      label: 'Workflows',
      content: (
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Build automation in minutes with reusable flow blocks and policy checkpoints.
            </p>
            <div className="mt-4 grid gap-3">
              {['Incident routing', 'Data lineage sync', 'Compliance snapshots'].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <ApiSnippet />
        </div>
      ),
    },
    {
      id: 'insights',
      label: 'Insights',
      content: (
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              99.98% uptime
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              3.2x faster response
            </div>
            <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
              42 workflows active
            </div>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl">
            <img
              src={stockImages.analytics}
              alt="Analytics dashboard"
              className="h-40 w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      ),
    },
    {
      id: 'governance',
      label: 'Governance',
      content: (
        <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Align every deployment to policy with built-in approvals, audit logs, and posture alerts.
          </p>
          <div className="mt-4 space-y-3">
            {['SOC2-ready logging', 'Role-based controls', 'Risk scoring'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  const [activeTab, setActiveTab] = useState(demoTabs[0].id)

  return (
    <div>
      <Section className="container pt-20 pb-8 lg:pb-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Badge>Etiva Control Plane</Badge>
            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="show"
              className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              {heroLines.map((line, lineIndex) => (
                <span key={line} className="block">
                  {line.split(' ').map((word, wordIndex) => (
                    <motion.span
                      key={`${lineIndex}-${wordIndex}`}
                      variants={wordVariant}
                      className="mr-2 inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
                </span>
              ))}
            </motion.h1>
            <p className="mt-6 max-w-xl text-base text-slate-600 dark:text-slate-300">
              Etiva Technologies delivers an automation control plane that connects data signals, policy
              decisions, and real-time orchestration across your entire stack.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink to="/product" size="lg">
                Explore platform <FiArrowUpRight />
              </ButtonLink>
              <Button variant="ghost" size="lg">
                Watch demo
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Metric label="Signals processed daily" value={780} suffix="M" />
              <Metric label="Automation coverage" value={96} suffix="%" />
              <Metric label="Average response time" value={42} suffix="ms" />
            </div>
          </div>
          <div className="relative flex flex-col items-center">
            <DeviceMockup y={deviceY} className={reduceMotion ? '' : 'animate-float'} />
            {/* Mobile image */}
            <div className="mt-6 w-full overflow-hidden rounded-2xl border border-slate-200 lg:hidden dark:border-white/10">
              <img
                src={stockImages.teamCollab}
                alt="Team collaborating in a modern workspace"
                loading="eager"
                className="h-48 w-full object-cover"
              />
            </div>
            <div className="mt-10 hidden lg:block">
              <ScrollIndicator />
            </div>
          </div>
        </div>
      </Section>

      <Section className="container pt-24">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <div className="mb-4 h-36 overflow-hidden rounded-xl">
              <img
                src={stockImages.dashboard}
                alt="Unified dashboard"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Unified control</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Centralize signals, automation, and policy in one operational layer.
            </p>
          </Card>
          <Card>
            <div className="mb-4 h-36 overflow-hidden rounded-xl">
              <img
                src={stockImages.serverRoom}
                alt="Server infrastructure"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Built-in resilience</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Failover-aware workflows with observability embedded at every step.
            </p>
          </Card>
          <Card>
            <div className="mb-4 h-36 overflow-hidden rounded-xl">
              <img
                src={stockImages.coding}
                alt="Code review"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Compliance clarity</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Audit-ready evidence and governance without slowing delivery.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="container">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Trusted by</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Teams who operate at the edge</h2>
            </div>
            <ButtonLink to="/solutions" variant="secondary" size="sm">
              View solutions
            </ButtonLink>
          </div>
          <LogoCloud logos={logos} />
        </div>
      </Section>

      <Section className="container pt-8 lg:pt-10">
        <div className="flex flex-col gap-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Feature highlights</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
              Everything you need to orchestrate, secure, and scale automation.
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Etiva connects workflows, telemetry, and governance into one adaptive platform.
            </p>
          </div>
          <FeatureGrid features={features.slice(0, 6)} />
        </div>
      </Section>

      <Section className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Interactive demo</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
              A command center for every automation decision.
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Explore how Etiva transforms telemetry into action and keeps teams aligned.
            </p>
          </div>
          <Tabs items={demoTabs} activeId={activeTab} onChange={setActiveTab} />
        </div>
      </Section>

      <Section className="container">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Testimonials</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
              Trusted by operators, engineers, and security leaders.
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Teams stay aligned with consistent automation, built-in governance, and fast iteration.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <Testimonial key={item.name} item={item} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="container pb-20">
        <div className="flex flex-col items-start justify-between gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-500/10 via-white to-fuchsia-500/10 p-8 md:flex-row md:items-center md:p-12 dark:border-white/10 dark:from-cyan-500/20 dark:via-slate-950 dark:to-fuchsia-500/20">
          <div className="max-w-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Ready to see Etiva?</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">Launch a custom demo in minutes.</h2>
          </div>
          <ButtonLink to="/contact" size="lg" className="shrink-0">
            Book a demo
          </ButtonLink>
        </div>
      </Section>
    </div>
  )
}
