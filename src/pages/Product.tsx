import { useState } from 'react'
import { FiShield, FiCloud, FiCodesandbox } from 'react-icons/fi'
import { Badge } from '../components/Badge'
import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { Tabs } from '../components/Tabs'
import { ApiSnippet } from '../components/ApiSnippet'
import { LogoCloud } from '../components/LogoCloud'
import { logos } from '../data/logos'

// Stock images from Unsplash
const stockImages = {
  serverRoom: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  security: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
  cloud: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
  code: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
}

export default function Product() {
  const tabs = [
    {
      id: 'orchestration',
      label: 'Orchestration',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Flow builder</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Chain signals, policies, and automation steps into reliable playbooks.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Runtime engine</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Execute workflows with sub-100ms latency and deterministic replay.
            </p>
          </Card>
        </div>
      ),
    },
    {
      id: 'data',
      label: 'Data Fabric',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Unified telemetry</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Normalize logs, traces, and product events into one schema.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Context pipelines</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Enrich every event with business context for smarter decisions.
            </p>
          </Card>
        </div>
      ),
    },
    {
      id: 'governance',
      label: 'Governance',
      content: (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Policy engine</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Define approval gates, risk scores, and automated alerts.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Audit trails</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Track every change with immutable logs and compliance exports.
            </p>
          </Card>
        </div>
      ),
    },
  ]

  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div>
      <Section className="container pt-16">
        <div className="flex flex-col gap-6">
          <Badge>Product deep dive</Badge>
          <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">The automation platform built for scale.</h1>
          <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Etiva combines orchestration, observability, and governance so teams can deliver faster without
            trading away security or reliability.
          </p>
          <ButtonLink to="/contact" size="lg">
            Talk to product
          </ButtonLink>
        </div>
      </Section>

      <Section className="container">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Modules</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Everything teams need, modularized.</h2>
          </div>
          <Tabs items={tabs} activeId={activeTab} onChange={setActiveTab} />
        </div>
      </Section>

      <Section className="container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Platform overview</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Infrastructure you can trust.</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Etiva runs on a multi-region core with redundancy baked into every layer so your automation
              never slows down.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                Automated failover and traffic-aware routing.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                Encrypted data paths with real-time key rotation.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                Continuous posture scans with weekly audit snapshots.
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10">
            <img
              src={stockImages.serverRoom}
              alt="Modern server rack infrastructure"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="container">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card>
            <div className="mb-4 h-32 overflow-hidden rounded-xl">
              <img
                src={stockImages.security}
                alt="Security infrastructure"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <FiShield className="text-2xl text-cyan-600 dark:text-cyan-300" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Security posture</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Continuous scanning, role-based access, and zero-trust onboarding.
            </p>
          </Card>
          <Card>
            <div className="mb-4 h-32 overflow-hidden rounded-xl">
              <img
                src={stockImages.cloud}
                alt="Cloud infrastructure"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <FiCloud className="text-2xl text-cyan-600 dark:text-cyan-300" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Compliance automation</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              SOC 2 and ISO-ready templates with exportable evidence.
            </p>
          </Card>
          <Card>
            <div className="mb-4 h-32 overflow-hidden rounded-xl">
              <img
                src={stockImages.code}
                alt="Code on screen"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <FiCodesandbox className="text-2xl text-cyan-600 dark:text-cyan-300" />
            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">Sandboxed testing</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Spin up safe staging environments for every workflow release.
            </p>
          </Card>
        </div>
      </Section>

      <Section className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Integrations</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Connect your existing stack.</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Plug Etiva into data warehouses, ticketing systems, and cloud providers in minutes.
            </p>
          </div>
          <LogoCloud logos={logos} />
        </div>
      </Section>

      <Section className="container pb-8 lg:pb-12">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">API highlight</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Build on the Etiva API.</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Every workflow, policy, and signal is fully accessible through a clean API surface.
            </p>
            <ButtonLink to="/resources" variant="secondary" size="sm" className="mt-6">
              Explore docs
            </ButtonLink>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Example request</p>
            <pre className="mt-4 overflow-auto rounded-xl bg-slate-100 p-4 text-xs text-slate-700 dark:bg-slate-950/80 dark:text-slate-200">
{`POST /v1/workflows/trigger\nAuthorization: Bearer $ETIVA_KEY\n\n{\n  \"workflow\": \"incident-routing\",\n  \"priority\": \"p1\",\n  \"context\": {\n    \"service\": \"api-edge\",\n    \"latency\": \"430ms\"\n  }\n}`}
            </pre>
            <div className="mt-4">
              <ApiSnippet />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
