import React, { useContext, useState } from "react";
import "../styles/modal.css";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { Context } from "../Context/Context.jsx";
import { Peticion } from "../helpers/Peticion.jsx";
import { useForm } from "../Hooks/useForm.js";

function ModalAddObjetive() {
  const modalContext = useContext(Context);
  const { formulario, enviado, cambiado } = useForm(); //* utilizado en la creacion y edicion de objetivos
  const [result, setResult] = useState(false);

  

  const saveObjetive = async (e) => {
    //*Guardar nuevos objetivos
    e.preventDefault();
    let newObjetive = formulario;
    const url = "http://localhost:3900/api/create_objetive";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(newObjetive),
    };
    fetch(url, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        // Selecciona el elemento de input de tipo file que permite cargar imágenes
        const inputElement = document.getElementById("fileInput");
        const image = inputElement.files[0];

        if (inputElement.value) {
          const formData = new FormData();
          formData.append("file0", image, image.name);
          await fetch(
            "http://localhost:3900/api/subir_imagen/" + data.objetivo._id,
            {
              method: "POST",
              headers: {
                Authorization: localStorage.getItem("token"),
              },
              body: formData,
            }
          )
            .then((response) => response.json())
            .then((data) => {})
            .catch((error) => {
              console.error("Error al subir la imagen:", error);
            });
        }
        modalContext.conseguirObjetivos();
        modalContext.setModalState(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {modalContext.modalState && (
        <Overlay>
          <div className="modalContainer">
            <button
              className="closeModalWindows"
              onClick={() => {
                modalContext.setModalState(false);
              }}
            >
              <AiOutlineClose className="closeButton " />
            </button>
            <h2 className="tituloModal">Nuevo Objetivo</h2>
            <form className="form" onSubmit={saveObjetive} autoComplete="off">
              <div className="inputsContainer">
                <input
                  name="nombre"
                  className="input"
                  type="text"
                  placeholder="Objetivo"
                  required="true"
                  onChange={cambiado}
                />
                <input
                  name="cantidad"
                  className="input"
                  type="number"
                  placeholder="Cantidad"
                  required="true"
                  onChange={cambiado}
                />
                <div className="fileContainer">
                  <img
                    className="logoInput"
                    src="https://res.cloudinary.com/ivannavas/image/upload/v1702505569/GestorDeAhorros/Web/add_d2bzks.png"
                    alt="logoInput"
                  />
                  <input
                    className="file"
                    type="file"
                    id="fileInput"
                    name="file0"
                  />
                </div>
              </div>
              <div className="buttonAddContainer">
                <input type="submit" value="Confirmar" className="butttonAdd" />
              </div>
            </form>
          </div>
        </Overlay>
      )}
    </>
  );
}
export default ModalAddObjetive;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  letf: 0;
  top: 0;
  display: grid;
  justify-content: center;
  align-items: center;
`;
