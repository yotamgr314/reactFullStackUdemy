import React from 'react'; // NOTE: so we could create functional component.
import './UsersList.css';
import UserItem from './UsersItem';

const UsersList = props => { // NOTE: we probably will recivie the users data from the parent component - hense the props.
if(props.items.length === 0){

    return <div> className="center"
      <h2>No users found.</h2>  
    </div>
}



return <ul>
    {props.items.map(user => {
        return <UserItem
        key={user.id}
        id={user.id}
        image={user.image}
        name={user.name}
        placeCount={user.places}
        />;
    })}
</ul>
};

export default UsersList;

// NOTE: we use map because we need to change from array of js objects into an array of jsx! so it could be rendered by React.
