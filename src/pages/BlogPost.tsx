import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { ButtonLink } from '../components/Button'
import { Section } from '../components/Section'
import { blogPosts } from '../data/blog'

function renderContent(body: string) {
  const blocks = body.split('\n\n')
  return blocks.map((block, index) => {
    if (block.startsWith('## ')) {
      return (
        <h2 key={index} className="mt-8 text-2xl font-semibold text-white">
          {block.replace('## ', '')}
        </h2>
      )
    }
    if (block.startsWith('- ')) {
      const items = block.split('\n').map((line) => line.replace(/^-\s+/, ''))
      return (
        <ul key={index} className="mt-4 list-disc space-y-2 pl-6 text-sm text-slate-300">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    }
    return (
      <p key={index} className="mt-4 text-sm text-slate-300">
        {block}
      </p>
    )
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = useMemo(() => blogPosts.find((item) => item.slug === slug), [slug])

  if (!post) {
    return (
      <Section className="container">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Post not found</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">We could not locate this article.</h1>
        <ButtonLink to="/resources" className="mt-6">
          Back to resources
        </ButtonLink>
      </Section>
    )
  }

  return (
    <Section className="container">
      <div className="max-w-3xl">
        <Link to="/resources" className="text-xs uppercase tracking-[0.2em] text-slate-400">
          Back to resources
        </Link>
        <h1 className="mt-4 text-4xl font-semibold text-white">{post.title}</h1>
        <p className="mt-2 text-sm text-slate-400">{post.date}</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
          <img
            src={post.image}
            alt={post.title}
            loading="eager"
            className="h-64 w-full object-cover"
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <div className="mt-8 space-y-2">{renderContent(post.body)}</div>
      </div>
    </Section>
  )
}
