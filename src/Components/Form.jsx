import React, { useState } from "react";
import Message from "./Message";
import "../Styles/form.css"

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    texto: ""
  });
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [nameError, setNameError] = useState("");
  const [textError, setTextError] = useState("");

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    let isValid = true;

    if (user.nombre.trim().length < 3) {
      setNameError("El nombre debe tener más de 3 letras");
      isValid = false;
    } else {
      setNameError("");
    }
    if (user.texto.length > 255) {
      setTextError("Excediste el límite de caracteres permitidos");
      isValid = false;
    } else {
      setTextError("");
    }
    if (!emailRegex.test(user.email)) {
      isValid = false;
    }

    if (isValid) {
      setShow(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="form-container">
        {show ? (
          <Message nombre={user.nombre} />
        ) : (
          <form onSubmit={handleSubmit}>
            <label> Nombre completo:</label>
            <input
              type="text"
              value={user.nombre}
              name="nombre"
              onChange={handleChange}
            />
            {nameError && (
              <p style={{ color: "red",fontSize: "12px" }}>{nameError}</p>
            )}

            <label> Email:</label>
            <input
              type="email"
              value={user.email}
              name="email"
              onChange={handleChange}
            />

            <label> Mensaje: </label>
            <textarea
              rows="10"
              cols="50"
              value={user.texto}
              name="texto"
              onChange={handleChange}
              placeholder="Escribe tu mensaje en 255 caracteres"
            />
            <p style={{ fontSize: "12px", marginTop: "5px" }}>
              Caracteres: {user.texto.length}/255
            </p>
            {textError && (
              <p style={{ color: "red", fontSize: "12px" }}>{textError}</p>
            )}

            <button type="submit"> Enviar</button>

            {error && (
              <h4 style={{ color: "red" }}>
                Por favor verifique su información nuevamente
              </h4>
            )}
          </form>
        )}
      </div>
    </>
  );
};
export default Form;