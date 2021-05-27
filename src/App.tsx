import React, { useState, useEffect } from "react";
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
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
import { gql, useQuery } from "@apollo/client";
import theme from "./theme";
import Nav from "@components/Nav/Nav";
import Comments from "@components/Comments";

import GlobalStyles from "@theme/globalStyles";
import { InputForm } from "@components/InputForm";
import Users from "@components/Users";

library.add(faBars, faUser, faHeart, faArrowAltCircleRight);

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

// Add user to db
export const ADD_USER = gql`
  mutation insert_users_one(
    $object: users_insert_input! = { name: "Test App Name" }
  ) {
    insert_users_one(object: $object) {
      name
      id
    }
  }
`;


// Get all users from db
const GET_USERS = gql`
  query GetUsers {
    users {
      name
      id
    }
  }
`;


function App() {
  const [users, setUsers] = useState([]);
  const { loading, error, data, refetch } = useQuery(GET_USERS); // add error handling
 
  const GetUsersQuery = () => {
    console.log("GetUsersQuery");
    refetch(); //Refetching enables you to refresh query results in response to a particular user action
    setUsers(data);
  };

  return (
    <Root>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Nav />
        <Hero getUsersQuery={GetUsersQuery} />
        <Users />
        {/* <InputForm /> */}
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
