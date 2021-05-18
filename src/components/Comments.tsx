import React from "react";
import { gql, useMutation } from "@apollo/client";

// the use of gql turns the query into a proper graphql query
const ADD_USER = gql`
  mutation insert_users_one(
    $object: users_insert_input! = { name: "Test App Name" }
  ) {
    insert_users_one(object: $object) {
      name
      id
    }
  }
`;

const Comments = () => {
  const [addUser, { data }] = useMutation(ADD_USER);

  const handleSubmit = async () => {
    console.log("data useMutation", data);
    console.log("addUser", addUser);
  };

  return (
    <div>
      <h1>comments!!</h1>
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default Comments;
