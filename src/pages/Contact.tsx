import { useState } from 'react'
import type { FormEvent } from 'react'
import { Badge } from '../components/Badge'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { FormField } from '../components/FormField'
import { Section } from '../components/Section'

// Stock images from Unsplash
const stockImages = {
  teamMeeting: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
}

interface FormState {
  name: string
  email: string
  company: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [submitted, setSubmitted] = useState(false)

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const nextErrors: Partial<FormState> = {}
    if (!form.name.trim()) nextErrors.name = 'Please add your name.'
    if (!form.email.trim()) {
      nextErrors.email = 'An email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!form.message.trim()) nextErrors.message = 'Tell us what you want to build.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  return (
    <div>
      <Section className="container pt-16">
        <Badge>Contact</Badge>
        <h1 className="mt-5 text-4xl font-semibold text-slate-900 dark:text-white">Talk to the Etiva team.</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Tell us about your stack and we will put together a tailored demo.
        </p>
      </Section>

      <Section className="container pb-8 lg:pb-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5"
          >
            <FormField
              label="Full name"
              name="name"
              value={form.name}
              onChange={(value) => updateField('name', value)}
              placeholder="Awaiz Ahmed"
              error={errors.name}
            />
            <FormField
              label="Work email"
              name="email"
              type="email"
              value={form.email}
              onChange={(value) => updateField('email', value)}
              placeholder="Awaiz@company.com"
              error={errors.email}
            />
            <FormField
              label="Company"
              name="company"
              value={form.company}
              onChange={(value) => updateField('company', value)}
              placeholder="Etiva Technologies"
            />
            <FormField
              label="Message"
              name="message"
              as="textarea"
              value={form.message}
              onChange={(value) => updateField('message', value)}
              placeholder="Share your goals, workflows, or compliance needs."
              error={errors.message}
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button type="submit" size="lg">
                Send request
              </Button>
              {submitted && (
                <span className="text-sm text-cyan-600 dark:text-cyan-300">
                  Thanks! We will reach out within one business day.
                </span>
              )}
            </div>
          </form>

          <div className="space-y-6">
            <Card className="overflow-hidden p-0">
              <img
                src={stockImages.teamMeeting}
                alt="Etiva team collaboration"
                loading="lazy"
                className="h-44 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Book a demo</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  See the platform in action, including workflow design, governance, and analytics.
                </p>
                <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  <p>Duration: 30 minutes</p>
                  <p>Includes: Security + architecture walkthrough</p>
                  <p>Best for: Platform, ops, and data leaders</p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="mb-4 h-24 overflow-hidden rounded-xl">
                <img
                  src={stockImages.office}
                  alt="Modern office"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Response time</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Our team typically replies within one business day. Priority support available for
                Enterprise plans.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
