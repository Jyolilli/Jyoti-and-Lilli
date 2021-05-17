import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Router } from "@reach/router";
import Hero from "@components/Hero/Hero";
import Content from "@components/Content";
import Dynamic from "@containers/Dynamic";
import {
  faBars,
  faHeart,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
import { gql, useQuery } from "@apollo/client";
import theme from "./theme";
import Nav from "@components/Nav/Nav";

import GlobalStyles from "@theme/globalStyles";
import { InputForm } from "@components/InputForm";

library.add(faBars, faHeart, faArrowAltCircleRight);

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);
//    {
//  "object": {
// "name": "Lola"
//  }
//  }
// (object: {name: "Ted"})
export const ADD_USER = gql`
    mutation insert_users_one(
      $object: users_insert_input! = {name: "Test App Name"}
      ) {
      insert_users_one(object: $object) {
        name
        id
      }
    }
  `;


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
        <GlobalStyles />
        <Nav />
        <Hero />
        <Users />
        <InputForm />
        <Content />
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </ThemeProvider>
    </Root>
  );
}
export default App;
