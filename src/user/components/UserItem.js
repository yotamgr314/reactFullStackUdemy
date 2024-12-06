import React from "react";
import { Link } from "react-router-dom"; // NOTE: for dynamic redirection via user id that shown on the URL PATH. NOTE: for navlinks that does not depends on the user id we will use import Navigation from 'react-router-dom';

import "./UserItem.css";
import Avatar from "../../shared/components/UIElements/Avatar";

// NOTE: each user is an li
const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <Link></Link>
        <div className="user-item__image">
          <Avatar image={props.image} alt={props.name} />
        </div>
        <div className="user-item__info">
          <h2>{props.name}</h2>
          <h3>
            {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
          </h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
