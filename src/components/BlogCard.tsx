import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blog'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 transition-colors hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
    >
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{post.date}</p>
        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
          <span className="relative inline-block">
            {post.title}
            <span className="absolute left-0 top-full mt-2 h-0.5 w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-fuchsia-400 transition-transform duration-300 group-hover:scale-x-100" />
          </span>
        </h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{post.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
