import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
// the use of gql turns the query into a proper graphql query

type CommentsProps = {
  getUsersQuery: Function;
};


const Comments = ({getUsersQuery}: CommentsProps) => {

const [nameInput, setNameInput] = useState('')
  

const ADD_USER = gql`
  mutation insert_users_one(
    $object: users_insert_input! 
  ) {
    insert_users_one(object: $object) {
      name
      id
    }
  }
`;

const [addUser, { error }] = useMutation(ADD_USER);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addUser({variables: {object: {name: nameInput}}});
    getUsersQuery();
  };
  console.log(nameInput)
  
  return (
    <div>
      <h1>{nameInput}</h1>
      <form>
        <input onChange={(e) => setNameInput(e.target.value)}></input>
      <button onClick={handleSubmit}>submit comment</button>
      </form>
    </div>
  );
};
export default Comments;
