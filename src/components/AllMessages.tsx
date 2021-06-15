import React from "react";
import { gql, useQuery } from "@apollo/client";

const MESSAGES = gql`
  query GetMessages {
    messages {
      message
      id
    }
  }
`;

const AllMessages = () => {
  const { loading, error, data } = useQuery(MESSAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const allMessageEntries = data.messages;

  console.log("data.messages, AllMessages", data.messages);
  const latestMessageEntry = allMessageEntries[allMessageEntries.length - 1];
  // map through Messages:
  // return ( data.messages.map((data: { name: string; id: number }) => {
  //   <>
  //   <h1>AllMessages</h1>
  //   <div key={data.id}>{data.id}</div></>})

  return <div key={latestMessageEntry.id}>{latestMessageEntry.message}</div>;
  };

export default AllMessages;
