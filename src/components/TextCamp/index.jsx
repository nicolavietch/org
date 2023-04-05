import React from "react";
import "./TextCamp.css";
const TextCamp = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  return (
    <div className="text-camp">
      <label>{props.titulo}</label>
      <input placeholder={placeholderModificado}></input>
    </div>
  );
};

export default TextCamp;
