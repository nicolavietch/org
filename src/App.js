import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario/Formulario";
import Header from "./components/Header/Header";
import MiOrg from "./components/MiOrg";

function App() {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <Header />
      {show && <Formulario />}
      <MiOrg handleClick={handleClick} />
    </div>
  );
}

export default App;
