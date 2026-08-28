import React from "react";
import "../Greetings.css";

function Greetings(props) {
  let greeting;

  switch (props.lang) {
    case "fi":
        greeting = "Moi";
        break;
    
    case "de":
        greeting = "Hallo";
        break;

    case "en":
        greeting = "Hello";
        break;

    case "es":
        greeting = "Hola";
        break;

    case "fr":
        greeting = "Bonjour";
        break;

    default:
        greeting = "Hi"
  }

  return (
    <div className="greeting">
      {greeting} {props.children}</div>
  );
}

export default Greetings;