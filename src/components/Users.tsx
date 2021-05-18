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
    console.log("data from hasura", data);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return data.users.map((data: { name: string; id: number }) => (
      <div key={data.id}>{data.name}</div>
    ));
}

export default Users
