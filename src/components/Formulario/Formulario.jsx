import React from "react";
import "./Formulario.css";
import TextCamp from "../TextCamp";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextCamp titulo="Nombre" placeholder="Ingresar nombre" />
        <TextCamp titulo="Puesto" placeholder="Ingresar puesto" />
        <TextCamp titulo="Foto" placeholder="Ingresar enlace de foto" />
      </form>
    </section>
  );
};

export default Formulario;
