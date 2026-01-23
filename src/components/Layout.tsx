import type { ReactNode } from 'react'
import { BackgroundGrid } from './BackgroundGrid'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { ParallaxBlobs } from './ParallaxBlobs'
import { ThemeToggle } from './ThemeToggle'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-ink-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-mesh-radial opacity-30 dark:opacity-100" />
        <BackgroundGrid />
        <ParallaxBlobs />
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-soft-light dark:opacity-[0.07]" />
      </div>
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <ThemeToggle />
    </div>
  )
}

