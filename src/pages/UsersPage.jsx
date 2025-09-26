// import React from 'react'

// export default function UsersPage() {
//   return (
//     <div>
//       <h1>User Pages</h1>
//     </div>
//   )
// }

import React from "react";
import { useGetUsersQuery } from "../features/apiSlice";

export default function UsersPage() {
  const { data: users = [], isLoading } = useGetUsersQuery();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} ({user.email})
        </div>
      ))}
    </div>
  );
}

