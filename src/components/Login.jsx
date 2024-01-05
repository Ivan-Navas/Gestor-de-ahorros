import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/login.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  const [view, setView] = useState(false);
  const [type, setType] = useState("password");

  const submit = (e)=>{
    e.preventDefault();
    console.log(type, view)
  }

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__tittle">Inicio de sesíon</h2>
        <div className="image">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1702505195/GestorDeAhorros/Documentacion/logo_jxwlsb.png"
            alt="Logo_imge"
            className="image__icon"
          />
        </div>
        <h2 className="login__web">Gestor de ahorros</h2>
        <form className="login__form" onSubmit={submit}>
          <input type="text" className="form__input" placeholder="Correo" />
          <div className="form__password">
            <input
              autoComplete="none"
              type={type}
              className="form__input input--password"
              placeholder="Contraseña"
            />
            {view ? (
              <button className="form__viewButton" onClick={()=>{
                
                setType("password")
                setView(false)
              }}>
                {" "}
                <AiFillEye className="form__view" />{" "}
              </button>
            ) : (
              <button className="form__viewButton" onClick={()=>{
                setType("text")
                setView(true)
              }}>
                {" "}
                <AiFillEyeInvisible className="form__view" />{" "}
              </button>
            )}
          </div>
          <div className="form__account">
            <div className="form__create">
              <h2 className="form__question">¿No tienes cuenta?</h2>
              <NavLink to="/register" className="form__createLink">
                Crea una.
              </NavLink>
            </div>
            <NavLink className="form__forget">Olvidé mi contraseña.</NavLink>
          </div>
          <button className="form__btn">Iniciar sesíon</button>
          <div className="form__or">
            <hr className="form__hr" />
            <h2 className="form__o">o</h2>
            <hr className="form__hr" />
          </div>
        </form>
        <div className="login__google">
          <button className="form__btn">
            <img
              src="https://res.cloudinary.com/ivannavas/image/upload/v1704424282/GestorDeAhorros/Web/5a951939c4ffc33e8c148af2_vwo6dv.png"
              alt="googleImage"
              className="google__image"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;