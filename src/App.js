import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg";
import Equipo from "./components/Equipo";

function App() {
  const [show, setShow] = useState(false);
  const [colaboradores, setColaboradores] = useState([]);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    //Spread operator
    setColaboradores([...colaboradores, colaborador]);
  };

  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#d9f7e9",
    },
    {
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8",
    },
    {
      titulo: "Ux y Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9",
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf",
    },
  ];

  return (
    <div>
      <Header />
      {show && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}
      <MiOrg handleClick={handleClick} />
      {equipos.map((equipo) => (
        <Equipo key={equipo.titulo} datos={equipo} />
      ))}
    </div>
  );
}

export default App;
