function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-section">
      <img
        alt="A digital marketing workspace with website traffic and campaign performance analytics"
        className="hero-background"
        src="/images/hero-bg.png"
      />
      <div className="hero-content">
        <p className="hero-eyebrow">
          <span aria-hidden="true" className="hero-eyebrow-dot" />
          Grow Your Business Online
        </p>
        <h1 id="hero-title">
          Strategic Digital
          <br />
          Marketing for
          <br />
          <span>Real Business Growth.</span>
        </h1>
        <p className="hero-description">
          We help brands grow with data-driven strategies, creative content and
          performance marketing. More visibility. More engagement. More sales.
        </p>
        <div className="hero-actions">
          <a className="hero-button hero-button-primary" href="#contact">
            Get Started <span aria-hidden="true">→</span>
          </a>
          <a className="hero-button hero-button-secondary" href="#services">
            Explore Our Work
          </a>
        </div>
        <div aria-label="Agency highlights" className="hero-stats">
          <div className="hero-stat">
            <strong>200+</strong>
            <span>Happy Clients</span>
          </div>
          <div className="hero-stat">
            <strong>350+</strong>
            <span>Projects Completed</span>
          </div>
          <div className="hero-stat">
            <strong>5+</strong>
            <span>Years Experience</span>
          </div>
          <div className="hero-stat">
            <strong>100%</strong>
            <span>Client Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
