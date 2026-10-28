const services = [
  {
    title: 'Search Engine Optimization',
    description: 'Rank higher, get more traffic, boost your business.',
    tone: 'mint',
    icon: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5" />
        <path d="M8.2 10.8h5.2M10.8 8.2v5.2" />
      </>
    ),
  },
  {
    title: 'Social Media Marketing',
    description: 'Build your brand, engage your audience, increase sales.',
    tone: 'rose',
    icon: (
      <>
        <path d="M12 20.2s-7.5-4.5-7.5-10A4.2 4.2 0 0 1 12 8.3a4.2 4.2 0 0 1 7.5 1.9c0 5.5-7.5 10-7.5 10Z" />
        <path d="M8.5 12h2l1.2-2.2 1.6 4.4 1.2-2.2h1" />
      </>
    ),
  },
  {
    title: 'Google Ads & Paid Campaigns',
    description: 'Get instant visibility and high-quality leads.',
    tone: 'amber',
    icon: (
      <>
        <path d="m10.2 3.8-7 12.1a2.4 2.4 0 0 0 2.1 3.6h2.5l8.4-14.6a2.4 2.4 0 0 0-2.1-3.6h-1.8a2.4 2.4 0 0 0-2.1 1.2Z" />
        <path d="m12.2 12.2 2.2 4a2.4 2.4 0 0 0 2.1 1.2h1.1a2.4 2.4 0 0 0 2.1-3.6l-2.4-4.1" />
        <path d="M7.8 14.5h8.4" />
      </>
    ),
  },
  {
    title: 'Website Development',
    description: 'Modern, fast and responsive websites for your business.',
    tone: 'blue',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13l-2 2 2 2M16 13l2 2-2 2m-3-5-2 6" />
      </>
    ),
  },
  {
    title: 'Branding & Creative Design',
    description: 'Make a lasting impression with a stunning visual identity.',
    tone: 'violet',
    icon: (
      <>
        <path d="M12 3a9 9 0 0 0 0 18h1.1a2 2 0 0 0 1.5-3.3 1.7 1.7 0 0 1 1.3-2.8h1.6a3.5 3.5 0 0 0 3.5-3.5A8.4 8.4 0 0 0 12 3Z" />
        <path d="M7.5 11h.01M10 7.5h.01M15 7.5h.01M17.5 11h.01" />
      </>
    ),
  },
  {
    title: 'Content Marketing',
    description: 'Valuable content. Better engagement. Real growth.',
    tone: 'lavender',
    icon: (
      <>
        <path d="M5 3.5h9l5 5v12H5a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
        <path d="M14 3.5v5h5M7 13h8M7 16.5h8" />
      </>
    ),
  },
]

function Services() {
  return (
    <section
      aria-labelledby="services-title"
      className="services-section"
      id="services"
    >
      <div className="services-content">
        <div className="services-heading">
          <div className="services-heading-copy">
            <p className="services-eyebrow">
              <span aria-hidden="true" />
              Our Services
            </p>
            <h2 id="services-title">Digital Solutions for Every Business</h2>
            <p className="services-description">
              From SEO to social media, we offer complete digital marketing
              services to help your brand grow, engage and convert.
            </p>
          </div>
          <div className="services-heading-aside">
            <a className="services-all-link" href="#contact">
              View All Services <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <a
              className={`service-card service-card-${service.tone}`}
              href="#contact"
              key={service.title}
            >
              <span aria-hidden="true" className="service-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                  viewBox="0 0 24 24"
                >
                  {service.icon}
                </svg>
              </span>
              <strong className="service-title">{service.title}</strong>
              <span className="service-description">{service.description}</span>
              <span aria-hidden="true" className="service-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
