// NOTE - thats an example for a presentational component
/*
01) Focus on displaying UI, without managing logic or state.
02) rely entirely on props for data and behavior
 */
import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
