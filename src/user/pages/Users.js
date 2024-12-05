import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {
    // NOTE: we dont have db, so users will be an array of js objects representing our DB, later on we will change to real DB.
    const USERS = [
        {
            id:'u1',
            name:'Max Schwarz',
            image:'https://www.wikihow.com/images/thumb/4/41/Get-the-URL-for-Pictures-Draft-Step-1.jpg/v4-460px-Get-the-URL-for-Pictures-Draft-Step-1.jpg', places: 3
        }
        ]; 

  return <UsersList items={}/>;
};

export default Users;
