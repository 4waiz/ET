import { Badge } from '../components/Badge'
import { ButtonLink } from '../components/Button'
import { Card } from '../components/Card'
import { Section } from '../components/Section'
import { BlogCard } from '../components/BlogCard'
import { blogPosts } from '../data/blog'
import codeScreen1 from '../assets/stock/code-screen-1.jpg'
import gradientTeal from '../assets/stock/gradient-teal.jpg'

export default function Resources() {
  return (
    <div>
      <Section className="container pt-16">
        <Badge>Resources</Badge>
        <h1 className="mt-5 text-4xl font-semibold text-slate-900 dark:text-white">Guides, docs, and product updates.</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Everything your team needs to onboard, integrate, and keep improving with Etiva.
        </p>
      </Section>

      <Section className="container">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="overflow-hidden p-0">
            <img
              src={codeScreen1}
              alt="Code snippets on a screen"
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Documentation hub</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                API references, SDK guides, and quickstarts to get live in hours.
              </p>
              <ButtonLink to="/resources" variant="secondary" size="sm" className="mt-4">
                Browse docs
              </ButtonLink>
            </div>
          </Card>
          <Card className="overflow-hidden p-0">
            <img
              src={gradientTeal}
              alt="Abstract product update visual"
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Release notes</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Weekly updates on new modules, security improvements, and platform tuning.
              </p>
              <ButtonLink to="/resources" variant="secondary" size="sm" className="mt-4">
                View updates
              </ButtonLink>
            </div>
          </Card>
        </div>
      </Section>

      <Section className="container pb-8 lg:pb-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Blog</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Latest thinking from Etiva.</h2>
          </div>
          <ButtonLink to="/resources" variant="ghost" size="sm">
            View all posts
          </ButtonLink>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </div>
  )
}
