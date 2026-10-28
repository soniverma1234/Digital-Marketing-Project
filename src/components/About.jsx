const values = [
  {
    title: 'Creative Minds',
    description: 'Fresh ideas and thoughtful strategies for every brand.',
    icon: (
      <>
        <path d="M12 3v2" />
        <path d="m18.4 5.6-1.4 1.4" />
        <path d="M21 12h-2" />
        <path d="m5.6 5.6 1.4 1.4" />
        <path d="M5 12H3" />
        <path d="M12 9a3 3 0 0 0-1.8 5.4c.5.4.8 1 .8 1.6h2c0-.6.3-1.2.8-1.6A3 3 0 0 0 12 9Z" />
        <path d="M11 19h2" />
      </>
    ),
  },
  {
    title: 'Data-Driven Results',
    description: 'Clear insights that turn good ideas into real growth.',
    icon: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h17" />
        <path d="m7 15 4-4 3 2 6-7" />
        <path d="M16 6h4v4" />
      </>
    ),
  },
  {
    title: 'Transparent Communication',
    description: 'A collaborative team that keeps you in the loop.',
    icon: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </>
    ),
  },
  {
    title: 'Long-Term Partnerships',
    description: 'We grow with you, building success that lasts.',
    icon: (
      <>
        <path d="M20.8 8.6c0 4.2-8.8 10-8.8 10s-8.8-5.8-8.8-10A4.6 4.6 0 0 1 12 6.4a4.6 4.6 0 0 1 8.8 2.2Z" />
      </>
    ),
  },
]

function About() {
  return (
    <section aria-labelledby="about-title" className="about-section" id="about">
      <div className="about-main">
        <div className="about-copy">
          <p className="about-eyebrow">
            <span aria-hidden="true" />
            About Us
          </p>
          <h2 id="about-title">
            Your Growth Partner
            <br />
            in the <span>Digital World</span>
          </h2>
          <p className="about-description">
            At Orbit &amp; Oak, we&apos;re more than just a digital marketing
            agency — we&apos;re your long-term growth partner. We combine
            creativity, technology and strategy to help businesses build strong
            brands and achieve measurable results.
          </p>
          <a className="about-button" href="#services">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about-visual">
          <video
            aria-label="A creative team collaborating around a table"
            autoPlay
            className="about-image"
            loop
            muted
            playsInline
            src="/images/about-team.mp4"
          />
          <div className="about-image-note">
            <span className="about-note-spark" aria-hidden="true">✦</span>
            <span>
              <strong>Better ideas</strong>
              <strong>start together</strong>
            </span>
          </div>
        </div>
      </div>

      <div aria-label="Our values" className="about-values">
        {values.map((value) => (
          <article className="about-value" key={value.title}>
            <span aria-hidden="true" className="about-value-icon">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                {value.icon}
              </svg>
            </span>
            <span className="about-value-copy">
              <strong>{value.title}</strong>
              <span>{value.description}</span>
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
