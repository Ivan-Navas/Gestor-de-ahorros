import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import "../styles/register.css";
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowLeft } from "react-icons/ai";

function Register() {
  const [view, setView] = useState(false);
  const [viewConfirm, setViewConfirm] = useState(false);
  const [type, setType] = useState("password");
  const [typeConfirm, setTypeConfirm] = useState("password");

  const submit = (e) => {
    e.preventDefault();
    console.log(type, view);
  };

  return (
    <div className="register">
      <section className="register__container">
        <NavLink to="/login" className="register__return"> <AiOutlineArrowLeft className="register__arrow" /> </NavLink>
        <h2 className="register__tittle">Registro</h2>
        <div className="image">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1702505195/GestorDeAhorros/Documentacion/logo_jxwlsb.png"
            alt="Logo_imge"
            className="image__icon"
          />
        </div>
        <h2 className="register__web">Gestor de ahorros</h2>
        <form className="register__form" onSubmit={submit}>
          <input type="text" className="form__input" placeholder="Nombre" />
          <input type="text" className="form__input" placeholder="Correo" />
          <div className="form__password ">
            <input
              autoComplete="none"
              type={type}
              className="form__input input--password"
              placeholder="Contraseña"
            />
            {view ? (
              <button
                className="form__viewButton"
                onClick={() => {
                  setType("password");
                  setView(false);
                }}
              >
                {" "}
                <AiFillEye className="form__view" />{" "}
              </button>
            ) : (
              <button
                className="form__viewButton"
                onClick={() => {
                  setType("text");
                  setView(true);
                }}
              >
                {" "}
                <AiFillEyeInvisible className="form__view" />{" "}
              </button>
            )}
          </div>
          <div className="form__password  container--password">
            <input
              autoComplete="none"
              type={typeConfirm}
              className="form__input input--password"
              placeholder="Confirmar contraseña"
            />
            {viewConfirm ? (
              <button
                className="form__viewButton"
                onClick={() => {
                  setTypeConfirm("password");
                  setViewConfirm(false);
                }}
              >
                {" "}
                <AiFillEye className="form__view" />{" "}
              </button>
            ) : (
              <button
                className="form__viewButton"
                onClick={() => {
                  setTypeConfirm("text");
                  setViewConfirm(true);
                }}
              >
                {" "}
                <AiFillEyeInvisible className="form__view" />{" "}
              </button>
            )}
          </div>
          <button className="form__btn">Registrar</button>
        </form>
      </section>
    </div>
  );
}

export default Register;
