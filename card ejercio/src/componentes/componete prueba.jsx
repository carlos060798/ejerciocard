import  { useState } from "react";

function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos del formulario
    const validationErrors = {};
    if (!name) {
      validationErrors.name = "El nombre es requerido";
    }
    if (!email) {
      validationErrors.email = "El correo electrónico es requerido";
    }
    if (!password) {
      validationErrors.password = "La contraseña es requerida";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Enviar el formulario si no hay errores de validación
      // Aquí puedes realizar la lógica adicional, como enviar los datos al servidor
      console.log("Formulario enviado");
    }
  };

  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;