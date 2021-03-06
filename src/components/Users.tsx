import React from 'react'
import { gql, useQuery } from "@apollo/client";

const USERS = gql`
query GetUsers {
  users {
    name
    id
  }
}
`;

const Users = () => {
  
    const { loading, error, data } = useQuery(USERS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const allEntries = data.users;
    const latestEntry = allEntries[allEntries.length -1]
    // map through users:
    // return data.users.map((data: { name: string; id: number }) => (
    //   <div key={data.id}>{data.name}</div>
    return (
      <div key={latestEntry.id}>{latestEntry.name}</div>
    );
}

export default Users
