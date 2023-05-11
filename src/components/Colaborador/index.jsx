import "./Colaborador.css";

import React from "react";

const Colaborador = (props) => {
  return (
    <div className="colaborador">
      <div className="encabezado">
        <img src="https://github.com/nicolavietch.png" alt="Frank" />
      </div>
      <div className="info">
        <h4>Frank García</h4>
        <h5>Estudiante</h5>
      </div>
    </div>
  );
};

export default Colaborador;
