import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
// the use of gql turns the query into a proper graphql query

type MessagesProps = {
  getMessagesQuery: Function;
};

//NewMessage sends newest input-message to db

const InputMessage = ({ getMessagesQuery }: MessagesProps) => {
  const [messageInput, setMessageInput] = useState("");


  //messages query
  const ADD_MESSAGE = gql`
    mutation insert_messages_one($message: String!) {
      insert_messages_one(object: { message: $message, sender: 1 }) {
        id
        message
      }
    }
  `;

  // Inputmessage uses addMessage to add a mutation, here the e.target.value with setMessageInput as messageInput to the database.

  const [addMessage, { error }] = useMutation(ADD_MESSAGE);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await addMessage({ variables: { message: messageInput } });
    getMessagesQuery();
  };
  console.log("messageInput:", messageInput);

  return (
    <div>
      <form>
        <input onChange={(e) => setMessageInput(e.target.value)}></input>
        <button onClick={handleSubmit}>submit message</button>
      </form>
    </div>
  );
};
export default InputMessage;
