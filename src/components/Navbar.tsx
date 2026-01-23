import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { FiMenu, FiX } from 'react-icons/fi'
import { ButtonLink } from './Button'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Product', to: '/product' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur transition-colors dark:border-white/5 dark:bg-slate-950/80">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="text-lg font-semibold text-slate-900 dark:text-white">
          Etiva <span className="text-cyan-600 dark:text-cyan-300">Technologies</span>
        </NavLink>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'text-sm font-semibold transition',
                  isActive
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink to="/contact" size="sm">
            Book a demo
          </ButtonLink>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-slate-700 transition-colors dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white/95 lg:hidden dark:border-white/10 dark:bg-slate-950/95">
          <div className="container flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  clsx(
                    'text-sm font-semibold transition',
                    isActive
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ButtonLink to="/contact" size="sm" className="w-full justify-center">
              Book a demo
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  )
}
