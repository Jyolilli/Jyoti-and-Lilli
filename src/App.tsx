import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Router } from "@reach/router";
import Hero from "@components/Hero/Hero";
import Dynamic from "@containers/Dynamic";
import "./app.css";
import {
  faBars,
  faHeart,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
import { gql, useQuery } from "@apollo/client";
import theme from "./theme";
import Nav from "@components/Nav/Nav";

library.add(faBars, faHeart, faArrowAltCircleRight);
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const USERS = gql`
    query GetUsers {
      users {
        name
        id
      }
    }
  `;

  function Users() {
    const { loading, error, data } = useQuery(USERS);
    console.log("data from hasura", data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.users.map((data: { name: string; id: number }) => (
      <div key={data.id}>{data.name}</div>
    ));
  }

  return (
    <Root>
      <ThemeProvider theme={theme}>
        <Nav />
        <div className="content">
          <Hero />
          <Users />

          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </ThemeProvider>
    </Root>
  );
}
export default App;
