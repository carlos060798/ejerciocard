/* eslint-disable react/prop-types */

import Usuario from "./Usuario";

function Usuarios({ usuarios }) { // Asegúrate de desestructurar el objeto props para obtener la propiedad 'usuarios'
  console.log(typeof usuarios);
  return (
    <>
      <div className="container d-flex justify-content-center">
        {usuarios.map(usuario => (
         // eslint-disable-next-line react/jsx-key
         <Usuario  usuario={usuario} />
        ))}
      </div>
    </>
  );
}

export default Usuarios;