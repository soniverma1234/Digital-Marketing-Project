import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

function BrandMark() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="16" cy="21" r="10.5" stroke="currentColor" strokeWidth="3" />
      <circle cx="24" cy="17" r="10.5" stroke="currentColor" strokeWidth="3" />
      <circle cx="25" cy="8" r="2" fill="currentColor" />
    </svg>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Orbit and Oak home" onClick={closeMenu}>
        <BrandMark />
        <span className="brand-copy">
          <span className="brand-name">Orbit &amp; Oak</span>
          <span className="brand-tagline">Digital Marketing Agency</span>
        </span>
      </a>

      <button
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen((open) => !open)}
        type="button"
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        aria-label="Main navigation"
        className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
      >
        {links.map((link) => (
          <a href={link.href} key={link.label} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="mobile-quote-link" href="#contact" onClick={closeMenu}>
          Get a Free Quote <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <a className="quote-button" href="#contact">
        Get a Free Quote <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navbar
