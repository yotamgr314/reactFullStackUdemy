import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  //NOTE: DUMBY ARRAY OF USERS DATABASE - LATER ON IN THE COURSE WILL REPLACE THIS WITH FETCH GET REQUEST FOR USERS LIST
  const USERS = [
    {
      id: "u1",
      name: "Max Schwartz",
      image:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
