const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand-group">
            <a className="footer-brand" href="#home">
              <span aria-hidden="true" className="footer-brand-mark">◎</span>
              <span>
                <strong>Orbit &amp; Oak</strong>
                <span>Digital Marketing Agency</span>
              </span>
            </a>
            <p>
              Thoughtful digital marketing to help ambitious brands grow with
              confidence.
            </p>
          </div>

          <div className="footer-links-group">
            <span className="footer-navigation-title">Explore</span>
            <nav aria-label="Footer navigation" className="footer-navigation">
              {footerLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <a className="footer-project-link" href="#contact">
            Start a project <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Orbit &amp; Oak. All rights reserved.
          </p>
          <a className="footer-back-to-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
