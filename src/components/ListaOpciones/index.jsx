import React from "react";
import "./ListaOpciones.css";

const ListaOpciones = (props) => {
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "DevOps",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión",
  ];

  const handleChange = (e) => {
    props.actualizarEquipo(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label htmlFor="">Equipos/</label>
      <select value={props.valor} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Equipo
        </option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
