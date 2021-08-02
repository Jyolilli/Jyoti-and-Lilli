import React from "react";
import { gql, useQuery } from "@apollo/client";
import SpeechBubble from "./bubbles/SpeechBubble";
import {Message} from "../types"

const MESSAGES = gql`
  query GetMessages {
    messages {
      message
      id
    }
  }
`;

// I am getting an understanding on how to use refetch() in Apollo




const AllMessages = () => {
  const { loading, error, data } = useQuery(MESSAGES);

  if (loading) return <p key="loading">Loading...</p>;
  if (error) return <p>Error :(</p>;

    // const allMessageEntries = data.messages;
    
    console.log("data.messages, AllMessages", data.messages);
    // return null
  // const latestMessageEntry = allMessageEntries[allMessageEntries.length - 1];
  // map through Messages:
  return data.messages.map((data: Message) => 
      <SpeechBubble key={data.id} bubbleData={data} />
  );

  // return <div key={latestMessageEntry.id}>{latestMessageEntry.message}</div>;
};

export default AllMessages;
