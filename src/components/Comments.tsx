import React from 'react'
import { gql, useQuery } from "@apollo/client";

// the use of gql turns the query into a proper graphql query
const ADD_USER = gql`  
    mutation insert_users_one(
      $object: users_insert_input! = {name: "Test App Name"}
      ) {
      insert_users_one(object: $object) {
        name
        id
      }
    }
  `;

const Comments = () => {
    useQuery(ADD_USER)
    return (
        <div>
            Comments
        </div>
    )
}

export default Comments
