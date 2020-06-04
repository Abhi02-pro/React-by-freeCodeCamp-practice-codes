import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.contacts.imgUrl} />
      <h3>{props.contacts.name}</h3>
      <p>Phone:{props.contacts.phone}</p>
      <p>E-mail:{props.contacts.email}</p>
    </div>
  );
}

export default Card;
