import React from 'react'
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

    const allEntries = data.messages;
    console.log("data.messages", data.messages);
    const latestEntry = allEntries[allEntries.length -1]
    // map through Messages:
    // return data.Messages.map((data: { name: string; id: number }) => (
    //   <div key={data.id}>{data.name}</div>
    return (
      <div key={latestEntry.id}>{latestEntry.message}</div>
    );
}

export default AllMessages
