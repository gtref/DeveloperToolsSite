import { Link } from 'react-router-dom'

function Html() {
  return (
    <>
      <h1>HTML</h1>
      <p>Learn the fundamentals of HTML and how to structure web pages.</p>
      <p><Link to="/learn">Back to languages</Link></p>
    </>
  )
}

export default Html
