import React, { useState } from "react";
import Message from "./Message";
import "../Styles/form.css"

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    texto: ""
  })
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)


  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
   
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if(
      user.nombre.trim().length >= 3 &&
      emailRegex.test(user.email) &&
      user.texto.length <= 255
    ) {
      setShow(true)
      setError(false)
    } else {
      setError(true)
    }
  } 
    
    return (
      <> 
      <div className="form-container">
        {show ? (
          <Message nombre= {user.nombre} />
        ): (
          <form onSubmit={handleSubmit}>
            <label> Nombre completo:</label>
            <input type="text"
            value={user.nombre}
            name="nombre"
            onChange={handleChange}
            />
            <label> Email:</label>
            <input type="email"
            value={user.email}
            name="email"
            onChange={handleChange}
            />
            <label> Mensaje: </label>
            <textarea 
            value={user.texto}
            name="texto"
            onChange={handleChange}
            placeholder="Escribe tu mensaje en 255 caracteres"
            />
            <p style={{ fontSize: "12px", marginTop: "5px"  }} >
              Caracteres: {user.texto.length}/255
            </p>

            <button type="submit"> Enviar</button>
            {error ? (
              <h4 style={{ color: "red" }} >
                Por favor verifique su información nuevamente
              </h4>
            ) : null }
            
          
          </form>
        )}
      </div>
      </>
    );
  };
 
export default Form;
