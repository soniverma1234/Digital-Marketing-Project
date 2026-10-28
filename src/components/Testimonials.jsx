import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Orbit & Oak transformed our online presence. Their SEO strategy brought us amazing results!',
    name: 'Ananya Sharma',
    role: 'Founder, Glow Beauty',
    initials: 'AS',
  },
  {
    quote:
      'Their social media campaigns increased our engagement by 300%. Highly professional and creative team!',
    name: 'Rahul Mehta',
    role: 'CEO, FitLife',
    initials: 'RM',
  },
  {
    quote:
      'Working with Orbit & Oak was the best decision for our business. They truly understand brand growth.',
    name: 'Priya Nair',
    role: 'Marketing Head, UrbanNest',
    initials: 'PN',
  },
]

function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const visibleTestimonials = [
    ...testimonials.slice(activeTestimonial),
    ...testimonials.slice(0, activeTestimonial),
  ]

  function showPreviousTestimonial() {
    setActiveTestimonial((current) =>
      (current - 1 + testimonials.length) % testimonials.length,
    )
  }

  function showNextTestimonial() {
    setActiveTestimonial((current) => (current + 1) % testimonials.length)
  }

  return (
    <section
      aria-labelledby="testimonials-title"
      className="testimonials-section"
      id="testimonials"
    >
      <div className="testimonials-content">
        <div className="testimonials-heading">
          <p className="testimonials-eyebrow">
            <span aria-hidden="true" />
            Testimonials
          </p>
          <h2 id="testimonials-title">
            What Our Clients <span>Say</span>
          </h2>
          <p>
            Every partnership starts with listening, thoughtful strategy and a
            shared vision for growth.
          </p>
        </div>

        <div className="testimonials-grid">
          {visibleTestimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.role}>
              <div className="testimonial-profile">
                <span aria-hidden="true" className="testimonial-avatar">
                  {testimonial.initials}
                </span>
              </div>
              <p>{testimonial.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-author-copy">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </span>
                <span aria-label="5 out of 5 stars" className="testimonial-stars">
                  ★★★★★
                </span>
              </div>
            </article>
          ))}
        </div>
        <div aria-label="Testimonial navigation" className="testimonials-controls">
          <button
            aria-label="Show previous testimonials"
            className="testimonials-arrow"
            onClick={showPreviousTestimonial}
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="testimonials-dots">
            {testimonials.map((testimonial, index) => (
              <button
                aria-label={`Show testimonial set ${index + 1}`}
                aria-pressed={activeTestimonial === index}
                className={`testimonials-dot${activeTestimonial === index ? ' is-active' : ''}`}
                key={testimonial.role}
                onClick={() => setActiveTestimonial(index)}
                type="button"
              />
            ))}
          </div>
          <button
            aria-label="Show next testimonials"
            className="testimonials-arrow testimonials-arrow-next"
            onClick={showNextTestimonial}
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <p className="testimonials-note">
          Sample testimonials for design preview. Replace with approved client
          feedback before publishing.
        </p>
      </div>
    </section>
  )
}

export default Testimonials
