import React from "react";
import "./Equipo.css";
import Colaborador from "../Colaborador";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo } = props.datos;

  const estiloSection = {
    backgroundColor: colorSecundario,
  };

  const estiloTitulo = {
    borderBottomColor: colorPrimario,
  };

  return (
    <section className="equipo" style={estiloSection}>
      <h3 style={estiloTitulo}>{titulo}</h3>
      <div className="colaboradores">
        <Colaborador />
        <Colaborador />
        <Colaborador />
        <Colaborador />
        <Colaborador />
      </div>
    </section>
  );
};

export default Equipo;
