/* NOTE this is a stateful component for example
01) Purpose: Handle logic, manage data, and connect with APIs.
02) Maintain and update their own state to handle dynamic behavior.
 */

import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;

//NOTE: DUMBY ARRAY OF USERS DATABASE - LATER ON IN THE COURSE WILL REPLACE THIS WITH FETCH GET REQUEST FOR USERS LIST
