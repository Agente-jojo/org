import Boton from "../Boton";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../listaOpciones/index";
import "./Form.css";

const Formulario = () => {
  return (
    <section className="formulario">
      <form>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" />
        <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" />
        <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" />
        <ListaOpciones />
        <Boton texto="Crear Colaborador" />
      </form>
    </section>
  );
};

export default Formulario;
