import React from "react";
import "./TextCamp.css";
const TextCamp = (props) => {
  const placeholderModificado = `${props.placeholder}...`;

  const handleChange = (e) => {
    props.actualizarValor(e.target.value);
  };

  return (
    <div className="text-camp">
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextCamp;
