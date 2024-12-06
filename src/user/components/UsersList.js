import React from "react";

import "./UsersList.css";

import UserItem from "./UserItem";

const UsersList = (props) => {
  // NOTE if zero users -> display massage no users..
  if (props.items.length === 0) {
    //NOTE: we named the propery items - we could name it anything. NOTE: we expect the props to be an array of users hence it should have a length propery built it in jsx.
    return (
      <div className="center">
        <h2>No users found.</h2>
      </div>
    );
  }
  /* NOTE any other case we expect props to be an array of javascript objects, each object representing a user - NOT JSX ELEMENTS.
        React renders only JSX components, javascript objects cannot be inserted into the DOM, they must be transformed into elements that react can render.
        hence we need to use the .map() function which will turn the array of data objects into an array of JSX elements by:
   01) iterate over each object in the items array.
   02) for each object: 
        01) the .map() will iterate each javascript object in the items array.
            02) for each user object in the items array it will return a JSX element.
   03) The key prop in each <li> element is essential for helping React identify which items have changed, been added, or been removed, which optimizes rendering performance.
        Each key should be a unique identifier, which in this case is assumed to be user.id. */
  // NOTE: the {} inside the react in general and inside the return statement is used when needed to use javascript inside react.

  // steps of this part micro specified:
  /* 
01) props.items is the array of users we are supposed to recivie. 
02) the .map is a built in js function explained in many details in my drive.
    01) the map() function expects to receive a callback function, aka a function that passed as parameter to another function.
        02) This callback function receives, as a parameter the value of each element in the array (thanks to the map fucntion mechanisem), and saves it into the user parameter of the callback function.
        03) the callback function creates a UserItem component after passing the values it received from each array element (stored in the user variable) to it.
        04) Finally, the map function returns a new array, where each element is what the callback function returned — meaning, each element in the new array is a UserItem component.
*/
  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id} // the key is for react purposes - react requires each item in a list to have an id. so it can follow it incase of removal or update and re render it.
            id={user.id} // each userItem will have id. so we copy it from the user object.
            image={user.image} // etc
            name={user.name} // etc
            placeCount={user.places} //etc
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
