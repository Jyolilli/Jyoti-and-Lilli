import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { library } from '@fortawesome/fontawesome-svg-core';
import { Router } from '@reach/router'
import Hero from '@components/Hero/Hero'
import Dynamic from '@containers/Dynamic'
import './app.css'
import {
  faBars, faHeart, faArrowAltCircleRight 
} from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Nav from '@components/Nav/Nav'

library.add(faBars, faHeart, faArrowAltCircleRight);


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <ThemeProvider theme={theme}>
      <nav>
        <Nav />
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
