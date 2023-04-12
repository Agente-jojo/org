import {useState} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Formulario from "./components/Form/Form";
import MiOrg from "./components/MiOrg";

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);

  //Ternario --> condicion ? seMuestra : noSeMuestra (obligarotio usar el ternario completo)
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  };

  return (
    <div>
      <Header />
      {/* {mostrarFormulario===true? <Formulario />:<></>} */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
