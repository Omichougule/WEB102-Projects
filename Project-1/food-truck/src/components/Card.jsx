import React from "react";

const Card = (props) => {
  return (
    <div className="Card">
      <img src={props.imageUrl} alt={props.name} />
      <h3>{props.name}</h3>
      <h4>{props.description}</h4>
      <a href={props.link}>
        <button>View Menu</button>
      </a>
    </div>
  );
};
export default Card;