import React from 'react';
import "../IdCard.css";

function IdCard(props) {
  return (
    <div className="box">
        <img
          src={props.picture}
          alt={props.firstName + " " + props.lastName}/>

        <div className="in4">
            <p><strong>Last name:</strong> {props.lastName}</p>

            <p><strong>First name:</strong> {props.firstName}</p>

            <p><strong>Gender:</strong> {props.gender}</p>

            <p><strong>Height:</strong> {props.height}</p>

            <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
        </div>
    </div>
    );
}

export default IdCard;