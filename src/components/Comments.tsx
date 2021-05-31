import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
// the use of gql turns the query into a proper graphql query

type CommentsProps = {
  getMessagesQuery: Function;
};

const Comments = ({ getMessagesQuery }: CommentsProps) => {
  const [nameInput, setNameInput] = useState("");

  //users query
  // const ADD_USER = gql`
  //   mutation insert_users_one(
  //     $object: users_insert_input!
  //   ) {
  //     insert_users_one(object: $object) {
  //       name
  //       id
  //     }
  //   }
  // `;

  //messages query
  const ADD_MESSAGE = gql`
    mutation insert_messages_one($message: String!) {
      insert_messages_one(object: { message: $message, sender: 1 }) {
        id
        message
      }
    }
  `;

  const [addMessage, { error }] = useMutation(ADD_MESSAGE);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addMessage({ variables: { message: nameInput } });
    getMessagesQuery();
  };
  console.log(nameInput);

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
