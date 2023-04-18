import React from "react";
import "./Formulario.css";
import TextCamp from "../TextCamp";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("envio", e);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextCamp titulo="Nombre" placeholder="Ingresar nombre" required />
        <TextCamp titulo="Puesto" placeholder="Ingresar puesto" required />
        <TextCamp
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
        />
        <ListaOpciones />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
