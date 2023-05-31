/* eslint-disable react/prop-types */



function Usuario({usuario}) {
  
  const {name,edad,imagen} = usuario;

    return ( <>
  
   

  <div className="card">
    <img src={imagen} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{edad}</p>
     
    </div>

    </div>
    </> )
}

export default Usuario;