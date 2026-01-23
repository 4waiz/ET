import type { TestimonialItem } from '../data/testimonials'
import { Card } from './Card'

export function Testimonial({ item }: { item: TestimonialItem }) {
  return (
    <Card className="h-full">
      <p className="text-sm text-slate-700 dark:text-slate-200">"{item.quote}"</p>
      <div className="mt-6">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {item.title}, {item.company}
        </p>
      </div>
    </Card>
  )
}
