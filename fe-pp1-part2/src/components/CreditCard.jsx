import React from "react";
import "../CreditCard.css";
import visaImg from "../assets/images/visa.png";
import masterCardImg from "../assets/images/master.png";

function CreditCard(props) {
  const last4Digits = props.number.slice(-4);

  let logo;

  if (props.type === "Visa") {
    logo = visaImg;
  } else {
    logo = masterCardImg;
  }

  const cardDeco = {
    backgroundColor: props.bgColor,
    color: props.color
  };

  return (
    <div className="credit-card" style={cardDeco}>

      <img className="card-logo"
        src={logo}
        alt={props.type}/>

      <div className="card-number">
        •••• •••• •••• {last4Digits}
      </div>

      <div className="card-bottom">

        <div className="card-info">
          <span>Expires {props.expirationMonth}/{props.expirationYear}</span>

          <span>{props.bank}</span>
        </div>

        <div className="card-owner">
          {props.owner}
        </div>

      </div>

    </div>
  );
}

export default CreditCard;