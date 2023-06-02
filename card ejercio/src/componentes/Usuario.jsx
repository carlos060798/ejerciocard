/* eslint-disable react/prop-types */

import "./Usuario.css"

function Usuario({usuario}) {
  
  const {name,edad,imagen} = usuario;

    return ( <>
  
   

  <div className="card  my-5 col-12 col-md-4 text-center ">
    <img src={imagen} className="card-img-top img-fluid my-4 with-img" alt="..."/>
    
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{edad}</p>
     
   

    </div>
    </> )
}

export default Usuario;