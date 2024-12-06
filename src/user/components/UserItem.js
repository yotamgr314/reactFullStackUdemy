import React from "react";
import { Link } from "react-router-dom"; // NOTE: for dynamic redirection via user id that shown on the URL PATH. NOTE: for navlinks that does not depends on the user id we will use import Navigation from 'react-router-dom';

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UserItem.css";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/places`}>
          {" "}
          {/*NOTE the LINK react component will take the userid from the URL path and navigate to http://localhost:3000/userId/places. NOTE it assumes we will have such frontEnd route path defined in App.js */}
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
