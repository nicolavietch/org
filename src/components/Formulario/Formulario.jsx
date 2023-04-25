import React, { useState } from "react";
import "./Formulario.css";
import TextCamp from "../TextCamp";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    let datosAEnviar = {
      nombre,
      puesto,
      foto,
      equipo,
    };
    console.log(datosAEnviar);
  };

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <TextCamp
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <TextCamp
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <TextCamp
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} />
        <Boton>Crear</Boton>
      </form>
    </section>
  );
};

export default Formulario;
