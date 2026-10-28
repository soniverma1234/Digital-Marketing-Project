function WhatsAppButton() {
  return (
    <a
      aria-label="Contact us"
      className="contact-float-button"
      href="#contact"
      title="Contact us"
    >
      <svg
        aria-hidden="true"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M20 11.5a8 8 0 0 1-11.8 7l-4.1 1 1-4A8 8 0 1 1 20 11.5Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path
          d="M8 9.5h8M8 12.5h5m-8 7 3.2-2.2A8 8 0 1 0 4 11.5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    </a>
  )
}

export default WhatsAppButton
