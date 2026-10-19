import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer">
      <Link className="footer-brand" to="/">
        Developer Tools
      </Link>
      <nav className="footer-nav" aria-label="Footer navigation">
        <Link to="/about">About</Link>
        <Link to="/learn">Learn</Link>
        <a
          className="footer-github-link"
          href="https://github.com/gtref"
          target="_blank"
          rel="noreferrer"
          aria-label="Developer Tools on GitHub"
        >
          <svg className="footer-github-icon" aria-hidden="true">
            <use href="/icons.svg#github-icon" />
          </svg>
        </a>
      </nav>
      <p className="footer-copyright">
        © {new Date().getFullYear()} Gtref
      </p>
    </footer>
  )
}

export default Footer
