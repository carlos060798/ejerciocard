/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "bootstrap/dist/css/bootstrap.min.css";
import { useState,useRef} from "react";
import Usuarios from "./componentes/Usuarios";

function App() {
  const [usuarios, setUsuarios] = useState([]); // eslint-disable-line no-unused-vars
  const [name, setName] = useState("");
  
  const [nameError, setNameError] = useState("");
  const [edad, setEdad] = useState("");
  const [edadError, setEdadError] = useState("");
  const [imagen, setImagen] = useState("");
  const [imagenError, setImagenError] = useState("");
  
//referencias del valor del input
  const Nombre = useRef();
  const Edad = useRef();
  const Imagen = useRef();

  function validateForm() {
    let isValid = true;
  
    if (name.trim() === "") {
      setNameError("El nombre es requerido");
      isValid = false;
    } else {
      setNameError("");
    }
  
    if (edad.trim() === "") {
      setEdadError("La edad es requerida");
      isValid = false;
    } else if (isNaN(edad)) {
      setEdadError("La edad debe ser un número");
      isValid = false;
    } else {
      setEdadError("");
    }
  
    if (imagen.trim() === "") {
      setImagenError("La imagen es requerida");
      isValid = false;
    } else {
      setImagenError("");
    }
  
    return isValid;
  } 

  function resetForm() {
    setName("");
    setEdad("");
    setImagen("");
    Nombre.current.value = "";
    Edad.current.value = "";
    Imagen.current.value = "";
  }


  function handleUsuarios(e) {
    e.preventDefault();

  if (validateForm()) {
    const usuario = [...usuarios, { name: name, edad: edad, imagen: imagen }];
    setUsuarios(usuario);
    resetForm();
   
  }
  }

  return (
    <div className="container">
      <h1 className="text-center">Historial de Usuarios</h1>
      <div className="d-flex justify-content-center">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              ref={Nombre}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={() => {
                const ValorNombre=Nombre.current.value;
                setName(ValorNombre)}}
            />
            { nameError && <div className="text-danger">{nameError}</div> }
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Edad
            </label>
            <input
              type="text"
              ref={Edad}
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) =>{
                const ValorEdad = e.target.value;
                setEdad(ValorEdad)}}
            />
            { edadError && <div className="text-danger">{edadError}</div> }
          </div>
          <div className="mb-3">
            <label className="form-check-label" htmlFor="exampleCheck1">
              Imagen de perfil
            </label>
            <input
              type="text"
               ref={Imagen}
              className="form-control"
              id="exampleCheck1"
              onChange={() =>{ const ValorImagen=Imagen.current.value;
                 setImagen(ValorImagen)}}
            />
           { imagenError && <div className="text-danger">{imagenError}</div> }
          </div>
          <button  className="btn btn-primary" onClick={handleUsuarios}>
            crear usuario
          </button>
        </form>
      </div>
      <Usuarios usuarios={usuarios} />
    </div>
  );
}

export default App;
