import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import FancyDiv from 'components/FancyDiv'
import Hero from 'components/Hero/Hero'
import Dynamic from 'containers/Dynamic'
import './app.css'
import HamburgerMenu from 'components/HamburgerMenu'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
        <HamburgerMenu />
      </nav>
      <div className="content">
        <Hero />
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
      </div>
    </Root>
  )
}

export default App
