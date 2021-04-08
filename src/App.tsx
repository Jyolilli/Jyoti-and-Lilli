import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from '@reach/router'
import Hero from '@components/Hero/Hero'
import Dynamic from '@containers/Dynamic'
import './app.css'
import HamburgerMenu from '@components/HamburgerMenu'
import { ThemeProvider } from 'styled-components';
import theme from './theme';


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Root>
  )
}

export default App
