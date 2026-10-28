import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  function updateField(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    if (status.type !== 'idle') {
      setStatus({ type: 'idle', message: '' })
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: 'submitting', message: 'Sending your message…' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const result = await response.json()

      if (!response.ok) {
        const message = result.error || 'We could not send your message.'
        throw new Error(message)
      }

      setForm(initialForm)
      setStatus({
        type: 'success',
        message: 'Thanks! Your inquiry has been saved. We’ll be in touch.',
      })
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Could not reach the server. Please try again.',
      })
    }
  }

  return (
    <section
      aria-labelledby="contact-title"
      className="contact-section"
      id="contact"
    >
      <div className="contact-content">
        <div className="contact-intro">
          <p className="contact-eyebrow">
            <span aria-hidden="true" />
            Get In Touch
          </p>
          <h2 id="contact-title">
            Let&apos;s Build Something
            <br />
            Great <span>Together.</span>
          </h2>
          <p className="contact-description">
            Tell us a little about your project. We&apos;ll review your inquiry
            and follow up with next steps.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <h3>Tell us about your project</h3>
            <p>Fields marked with * are required.</p>
          </div>

          <div className="contact-fields">
            <label className="contact-field">
              <span>Full name *</span>
              <input
                autoComplete="name"
                maxLength="100"
                name="name"
                onChange={updateField}
                placeholder="Your name"
                required
                value={form.name}
              />
            </label>
            <label className="contact-field">
              <span>Email address *</span>
              <input
                autoComplete="email"
                maxLength="254"
                name="email"
                onChange={updateField}
                placeholder="you@company.com"
                required
                type="email"
                value={form.email}
              />
            </label>
            <label className="contact-field">
              <span>Phone number</span>
              <input
                autoComplete="tel"
                maxLength="40"
                name="phone"
                onChange={updateField}
                placeholder="Your phone number"
                type="tel"
                value={form.phone}
              />
            </label>
            <label className="contact-field">
              <span>Service interested in</span>
              <select name="service" onChange={updateField} value={form.service}>
                <option value="">Select a service</option>
                <option>Search Engine Optimization</option>
                <option>Social Media Marketing</option>
                <option>Google Ads & Paid Campaigns</option>
                <option>Website Development</option>
                <option>Branding & Creative Design</option>
                <option>Content Marketing</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="contact-field">
              <span>Project budget</span>
              <select name="budget" onChange={updateField} value={form.budget}>
                <option value="">Choose a range (optional)</option>
                <option>Under ₹25,000</option>
                <option>₹25,000–₹75,000</option>
                <option>₹75,000–₹1,50,000</option>
                <option>₹1,50,000+</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="contact-field contact-field-full">
              <span>Your message *</span>
              <textarea
                maxLength="2000"
                minLength="10"
                name="message"
                onChange={updateField}
                placeholder="What would you like to achieve?"
                required
                rows="4"
                value={form.message}
              />
            </label>
          </div>

          <button
            className="contact-submit"
            disabled={status.type === 'submitting'}
            type="submit"
          >
            {status.type === 'submitting' ? 'Sending…' : 'Send Message'}
            <span aria-hidden="true">→</span>
          </button>
          <p
            aria-live="polite"
            className={`contact-status contact-status-${status.type}`}
            role={status.type === 'error' ? 'alert' : 'status'}
          >
            {status.message}
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
