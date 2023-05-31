/* eslint-disable no-undef */
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Usuarios from "./componentes/Usuarios";
function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [name, setName] = useState("");
  const [edad, setEdad] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setErrors] = useState({});

useEffect(() => {
 

    // Validar los campos del formulario
    const validationErrors = {};
    if (!name) {
      validationErrors.name = "El nombre es requerido";
    }
    if (!edad) {
      validationErrors.edad = "la edad  es requerido";
    }
    if (!imagen) {
      validationErrors.image = "La Url de la imagen  es requerida";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
  
      console.log("Formulario enviado");
    }
  },[name,edad,imagen])

  function handleUsuarios(e) {
    e.preventDefault();
    const usuario = [...usuarios, { name: name, edad: edad, imagen: imagen }];
    setUsuarios(usuario);
   
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
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
            />
            {error.name && <span>{error.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Edad
            </label>
            <input
              type="text"

              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setEdad(e.target.value)}
            />
            {error.edad && <span>{error.edad}</span>}
          </div>
          <div className="mb-3">
            <label className="form-check-label" htmlFor="exampleCheck1">
              Imagen de perfil
            </label>
            <input
              type="text"

              className="form-control"
              id="exampleCheck1"
              onChange={(e) => setImagen(e.target.value)}
            />
            {error.imagen && <span>{error.imagen}</span>}
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
