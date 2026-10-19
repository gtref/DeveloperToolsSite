import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Footer from './components/footer'
import Home from './pages/home'
import About from './pages/about'
import Learn from './pages/learn'
import Tools from './pages/tools'
import C from './pages/languages/c'
import Cpp from './pages/languages/cpp'
import Html from './pages/languages/html'
import JavaScript from './pages/languages/javascript'
import Python from './pages/languages/python'
import SatisCode from './pages/tools/Stside'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app-shell">
        <header className="site-header">
          <nav className="site-nav" aria-label="Main navigation">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              About
            </NavLink>
            <NavLink to="/learn" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Learn
            </NavLink>
            <NavLink to="/tools" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Tools
            </NavLink>
          </nav>
        </header>

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/pages/languages/javascript" element={<JavaScript />} />
            <Route path="/pages/languages/python" element={<Python />} />
            <Route path="/pages/languages/html" element={<Html />} />
            <Route path="/pages/languages/c" element={<C />} />
            <Route path="/pages/languages/cpp" element={<Cpp />} />
            <Route path="/pages/tools/Stside" element={<SatisCode />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
