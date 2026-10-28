import { useState } from 'react'
import projects from '../data/projects.js'

const categories = [
  'All',
  'SEO',
  'Social Media',
  'Google Ads',
  'Web Design',
  'Branding',
]

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const visibleProjects = projects.filter(
    (project) =>
      selectedCategory === 'All' || project.categories.includes(selectedCategory),
  )

  return (
    <section
      aria-labelledby="portfolio-title"
      className="portfolio-section"
      id="portfolio"
    >
      <div className="portfolio-content">
        <div className="portfolio-heading">
          <div className="portfolio-heading-copy">
            <p className="portfolio-eyebrow">
              <span aria-hidden="true" />
              Our Portfolio
            </p>
            <h2 id="portfolio-title">Our Work Speaks for Itself</h2>
            <p className="portfolio-intro">
              We help brands across industries achieve real results. Here are
              some of our recent projects.
            </p>
          </div>
          <a className="portfolio-all-link" href="#portfolio-grid">
            View All Projects <span aria-hidden="true">→</span>
          </a>
        </div>

        <div aria-label="Filter projects" className="portfolio-filters">
          {categories.map((category) => (
            <button
              aria-pressed={selectedCategory === category}
              className={`portfolio-filter${selectedCategory === category ? ' is-active' : ''}`}
              key={category}
              onClick={() => setSelectedCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>

        <div aria-live="polite" className="portfolio-grid" id="portfolio-grid">
          {visibleProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-preview">
                <img
                  alt=""
                  className="project-preview-image"
                  loading="lazy"
                  src={`/images/portfolio/${project.image}`}
                />
              </div>
              <div className="project-card-copy">
                <div className="project-card-details">
                  <h3>{project.title}</h3>
                  <div aria-label="Project services" className="project-tags">
                    {project.categories.slice(0, 2).map((category) => (
                      <span key={category}>{category}</span>
                    ))}
                  </div>
                </div>
                <a
                  aria-label={`Discuss ${project.title}`}
                  className="project-card-link"
                  href="#contact"
                >
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="portfolio-note">
          Project previews are illustrative concepts and do not represent
          verified client campaign results.
        </p>
      </div>
    </section>
  )
}

export default Portfolio
