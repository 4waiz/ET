import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const footerLinks = [
  { label: 'Product', to: '/product' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 transition-colors dark:border-white/10 dark:bg-slate-950/80">
      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              Etiva <span className="text-cyan-600 dark:text-cyan-300">Technologies</span>
            </p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Modern automation infrastructure for high-growth teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-4">
              <a
                href="tel:050-475-4950"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <FiPhone className="h-4 w-4" />
                050-475-4950
              </a>
              <a
                href="mailto:awaiz42ad@gmail.com"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-300"
              >
                <FiMail className="h-4 w-4" />
                awaiz42ad@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                <FiMapPin className="mt-0.5 h-4 w-4 shrink-0" />
                Abu Dhabi, UAE
              </div>
            </div>
          </div>

          {/* Newsletter/CTA */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Stay Updated
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
              Get the latest updates on automation, governance, and platform releases.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-100 dark:border-white/5">
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            © 2026 Etiva Technologies. All rights reserved.
          </span>
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Made by{' '}
            <a
              href="https://www.linkedin.com/in/awaiz-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
            >
              Awaiz Ahmed
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
