import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/register.css";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import newUseForm from "../Hooks/newUseForm";
import useAuth from "../Hooks/useAuth";

function Register() {
  const [view, setView] = useState(false);
  const [viewConfirm, setViewConfirm] = useState(false);
  const [type, setType] = useState("password");
  const [typeConfirm, setTypeConfirm] = useState("password");
  const { form, changed } = newUseForm({});
  const { setAuth } = useAuth()

 

  const saveUser = async (e) => {
    e.preventDefault()
    const url = "http://localhost:3900/api/user/save";
    let user = form;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // tipo de contenido
      },
      body: JSON.stringify(user), // convertir la info a json
    };

    // envia una peticion por post
    fetch(url, requestOptions)
      .then((response) => {
        if (response.ok) {
          // la peticion fue exitosa
          return response.json(); // parsear la respuesta a json
        } else {
          // la peticion tiene un error
          throw new Error(`peticion falló con status ${response.status}`);
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setAuth(data.user);
      })
      .catch((error) => {
        // si ocurre algun error durante la peticion
        console.error(error);
      });

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="register">
      <section className="register__container">
        <NavLink to="/login" className="register__return">
          {" "}
          <AiOutlineArrowLeft className="register__arrow" />{" "}
        </NavLink>
        <h2 className="register__tittle">Registro</h2>
        <div className="image">
          <img
            src="https://res.cloudinary.com/ivannavas/image/upload/v1702505195/GestorDeAhorros/Documentacion/logo_jxwlsb.png"
            alt="Logo_imge"
            className="image__icon"
          />
        </div>
        <h2 className="register__web">Gestor de ahorros</h2>
        <form className="register__form" onSubmit={saveUser}>
          <input
            type="text"
            className="form__input"
            placeholder="Nombre"
            name="name"
            onChange={(e) => {
              changed(e.target.name, e.target.value);
            }}
          />
          <input
            type="text"
            className="form__input"
            placeholder="Correo"
            name="email"
            onChange={(e) => {
              changed(e.target.name, e.target.value);
            }}
          />
          <div className="form__password ">
            <input
              autoComplete="none"
              type={type}
              className="form__input input--password"
              placeholder="Contraseña"
              name="password"
              onChange={(e) => {
                changed(e.target.name, e.target.value);
              }}
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
              onChange={(e) => {
                changed(e.target.name, e.target.value);
              }}
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
