import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="not-found-code">404</p>
      <h1 id="not-found-title">Page not found</h1>
      <p>The page you’re looking for doesn’t exist or may have moved.</p>
      <Link className="button" to="/">
        Back to home
      </Link>
    </section>
  )
}
