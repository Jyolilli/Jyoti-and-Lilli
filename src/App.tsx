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
import { gql, useQuery } from '@apollo/client';
import theme from './theme';
import Nav from '@components/Nav/Nav'
library.add(faBars, faHeart, faArrowAltCircleRight);
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])


function App() {
  const GET_USERS = gql`query {
    users {
      name
      id
    }
  }`
  const { loading, error, data } = useQuery(GET_USERS)
console.log('data from hasura', data)
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











