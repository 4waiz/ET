import type { IconType } from 'react-icons'
import {
  FiActivity,
  FiCloudLightning,
  FiCpu,
  FiLock,
  FiServer,
  FiShield,
  FiSliders,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi'

export interface Feature {
  title: string
  description: string
  icon: IconType
}

export const features: Feature[] = [
  {
    title: 'Realtime orchestration',
    description: 'Stream events, route decisions, and trigger automation in under 100ms with adaptive workflows.',
    icon: FiZap,
  },
  {
    title: 'Unified control plane',
    description: 'One console for environments, policies, and deployments across cloud, edge, and hybrid stacks.',
    icon: FiSliders,
  },
  {
    title: 'Observability fabric',
    description: 'End-to-end tracing and anomaly detection with automated root-cause suggestions.',
    icon: FiActivity,
  },
  {
    title: 'Secure by design',
    description: 'Zero-trust access, encrypted data paths, and continuous posture checks baked in.',
    icon: FiShield,
  },
  {
    title: 'Compliance toolkit',
    description: 'Audit-ready logs, retention controls, and policy baselines for regulated industries.',
    icon: FiLock,
  },
  {
    title: 'Intelligent compute',
    description: 'Elastic performance tiers that shift capacity where it matters most.',
    icon: FiCpu,
  },
  {
    title: 'Multi-cloud routing',
    description: 'Balance traffic and workloads with latency-aware routing and failover.',
    icon: FiCloudLightning,
  },
  {
    title: 'API-first extensibility',
    description: 'Composable APIs and webhooks for every object so teams can build faster.',
    icon: FiServer,
  },
  {
    title: 'Growth analytics',
    description: 'Actionable dashboards connect product usage to revenue impact.',
    icon: FiTrendingUp,
  },
]
